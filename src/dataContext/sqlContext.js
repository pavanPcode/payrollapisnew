// utils/dbContext.js (Abstract Base Class with Implementation)
const sql = require('mssql');
const config = require('../../config').DB_CONFIGS;

class DbContext {
  constructor(dbName) {
    if (this.constructor === DbContext) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    if (!dbName) {
      throw new Error("Database name must be provided.");
    }
    this.dbName = dbName;
    this.pool = '';
  }

  async createPool() {
    if (this.pool) return this.pool; 
    const dbConfig = config[this.dbName];
    if (!dbConfig) {
      throw new Error(`Database configuration for ${this.dbName} not found`);
    }
    try {
        this.pool = new sql.ConnectionPool(dbConfig).connect();
        console.log(`✅ Connected to MSSQL ${this.dbName}`);
        // Handle connection errors
        // this.pool.on("error", async (err) => {   
        //     console.error("❌ Connection pool error", err);
        //     try {
        //       await this.pool.close();
        //     } catch (_) {}
        //     this.pool = null;

        //     // Retry after delay
        //     setTimeout(() => {
        //       this.createPool().catch(console.error);
        //     }, 5000);
        // });
        
    } catch (err) {
        console.error("❌ Database connection failed", err);
        this.pool = null;
        setTimeout(() => {
          this.createPool().catch(console.error);
        }, 5000);

        throw err;
    }
  };
  async getPool() {
    if (!this.pool) {
        console.log("⏳ Pool not initialized, creating a new one...");
        await this.createPool();
    }

    if (!this.pool) {
        throw new Error("❌ Failed to initialize database connection pool.");
    }

    return this.pool;
  }
  // Execute a query (select)
  async executeQuery(query, params = {}) {
    try {
      const pool = await this.getPool();
      const request = await pool.request();
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
      const result = await request.query(query);
      return result.recordset;
    } catch (error) {
      throw new Error(`Error executing query on ${this.dbName}: ${error.message}`);
    }
  }
  async executeNonQuery(query, params = {})  {
    try {
      const pool = await this.getPool();
      const request = pool.request();
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
      await request.query(query);
    } catch (error) {
      throw new Error(`Error executing non-query on ${this.dbName}: ${error.message}`);
    }
  };

  // Execute a stored procedure (select,insert, update, delete)
  async executeProcedure(procName, params = {},outputparam = {}) {
    try {
      const pool = await this.getPool();
      const request = pool.request();
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
      if (Object.keys(outputparam).length > 0) {
        Object.entries(outputparam).forEach(([key, value]) => request.output(key, value));
      }
      const result = await request.execute(procName);
      console.log('sp_result',result)
      const returnObj = {
        resultdata:result.recordset || [],
        Status : result.output.Status,
        ResultMessage : result.output.ResultMessage
      };
      return returnObj;
    } catch (error) {
      throw new Error(`Error executing procedure ${procName} on ${this.dbName}: ${error.message}`);
    }
  }


  async executeProcedure_header(procName, params = {}, outputparam = {}) {
    try {
      const pool = await this.getPool();
      const request = pool.request();
  
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
  
      if (Object.keys(outputparam).length > 0) {
        Object.entries(outputparam).forEach(([key, value]) => request.output(key, value));
      }
  
      const result = await request.execute(procName);
      // console.log('sp_result', result);
      
      const recordset = result.recordset || [];
      console.log('recordset.length',recordset.length)
      const header = recordset.length > 0 ? Object.keys(recordset[0]) : [];
      console.log('header', header);
      const returnObj = {
        resultdata: recordset,
        header: header,
        Status: result.output?.Status ?? null,
        ResultMessage: result.output?.ResultMessage ?? null
      };
  
      return returnObj;
    } catch (error) {
      throw new Error(`Error executing procedure ${procName} on ${this.dbName}: ${error.message}`);
    }
  }
  


  // Execute a stored procedure (select,insert, update, delete)
  async executeProcedure_old(procName, params = {},outputparam = {}) {
    try {
      const pool = await this.getPool();
      const request = pool.request();
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
      if (Object.keys(outputparam).length > 0) {
        Object.entries(outputparam).forEach(([key, value]) => request.output(key, value));
      }
      const result = await request.execute(procName);
      console.log('result',result)
      return result.recordset || [];
    } catch (error) {
      throw new Error(`Error executing procedure ${procName} on ${this.dbName}: ${error.message}`);
    }
  }

  // Execute a stored procedure and return a scalar value (e.g., count or result of scalar query)
  async executeScalarProcedure(procName, params = {}) {
    try {
      const pool = await this.getPool();
      const request = pool.request();
      Object.entries(params).forEach(([key, value]) => request.input(key, value));
      const result = await request.execute(procName);
      return result.recordset[0] ? result.recordset[0][Object.keys(result.recordset[0])[0]] : null;
    } catch (error) {
      throw new Error(`Error executing scalar procedure ${procName} on ${this.dbName}: ${error.message}`);
    }
  }
}

module.exports = DbContext;
