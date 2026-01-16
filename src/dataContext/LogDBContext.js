// dataAccess/sqlDbContext.js (Derived Class)
const DbContext = require('./sqlContext')

class LogDBContext extends DbContext {
  constructor() {
    super(); // Call the base class constructor
    dbName = 'logdb';
    this.setDatabaseName(dbName);
  }
}
module.exports = LogDBContext;
