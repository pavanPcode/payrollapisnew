const sql = require('mssql');
const PrimeDB = require('../dataContext/PrimeDBContext');
const LiteDB = require('../dataContext/LiteDBContext'); // For LITE users
const StandardDB = require('../dataContext/StandardDBContext'); // For STANDARD users
const PremiumDB = require('../dataContext/PremiumDBContext'); // For PREMIUM users

const getDBContext = (licenseType) => {
  const type = Number(licenseType);
  switch (type) {
    case 1: return LiteDB;
    case 2: return StandardDB;
    case 3: return PremiumDB;
    case 4: return PrimeDB;
    default: throw new Error("❌ Invalid License Type");
  }
};

const { handleResponse,Sp_handleResponse_header,Sp_handleResponse,Sp_handleResponse_no_res,handleResponse_no_res } = require('../utils/responseHandler');

const DbDataByOperationId = (reqObject,userObject, res, OperationId) => {
    //  Get the correct DB context
    const dbType = userObject.dbType;
    const dbUtil = getDBContext(dbType);
    const data = reqObject;
    const jsonData = JSON.stringify(data);
    //console.log(db);

    const params = {
        OperationId: OperationId,
        JsonData: jsonData,
      }; // Add any parameters needed for the stored procedure

    console.log('params',params)
    const outputparams = {
        ResultMessage: sql.NVarChar(sql.MAX),
        Status: sql.NVarChar(sql.MAX),
      }; // Add any parameters needed for the stored procedure
      dbUtil.executeProcedure('[PROD].[SP_ScreenOperations]',params,outputparams)
        .then(results => Sp_handleResponse(res, results))  // Pass 'null' for error in the success case
        .catch(error => {
          console.error("❌ Stored Procedure Error:", error);
          handleResponse(res,false, error.message, null)
        });     // Pass 'null' for results in the error case
};

const DbDataByOperationId_no_Res = async (reqObject, userObject, OperationId) => {
  try {
      const dbType = userObject.dbType;
      const dbUtil = getDBContext(dbType);
      const data = reqObject;
      const jsonData = JSON.stringify(data);

      const params = {
          OperationId: OperationId,
          JsonData: jsonData,
      };

      const outputparams = {
          ResultMessage: sql.NVarChar(sql.MAX),
          Status: sql.NVarChar(sql.MAX),
      };

      // Execute stored procedure
      const results = await dbUtil.executeProcedure("[PROD].[SP_ScreenOperations]", params, outputparams);
      // console.log('results',results)
      return Sp_handleResponse_no_res(results); // Return processed response object
  } catch (error) {
      console.error("❌ Stored Procedure Error:", error);
      return handleResponse_no_res(false, error.message, null)
      // return { status: false, message: error.message, ResultData: null }; // Return error object
  }
};

const DbDataByOperationId_header = async (reqObject, userObject, OperationId) => {
  try {
      const dbType = userObject.dbType;
      const dbUtil = getDBContext(dbType);
      const data = reqObject;
      const jsonData = JSON.stringify(data);

      const params = {
          OperationId: OperationId,
          JsonData: jsonData,
      };

      const outputparams = {
          ResultMessage: sql.NVarChar(sql.MAX),
          Status: sql.NVarChar(sql.MAX),
      };

      // Execute stored procedure
      const results = await dbUtil.executeProcedure_header("[PROD].[SP_ScreenOperations]", params, outputparams);
      // console.log('results',results)
      return Sp_handleResponse_header(results); // Return processed response object
  } catch (error) {
      console.error("❌ Stored Procedure Error:", error);
      return handleResponse_no_res(false, error.message, null)
      // return { status: false, message: error.message, ResultData: null }; // Return error object
  }
};

module.exports = { DbDataByOperationId,DbDataByOperationId_no_Res,DbDataByOperationId_header };
