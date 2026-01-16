// dataAccess/sqlDbContext.js (Derived Class)
const DbContext = require('./sqlContext')

class LiteDBContext extends DbContext {
  constructor() {
    if (!LiteDBContext.instance) {
      super('rclitedb'); // Pass the database name
      LiteDBContext.instance = this;
    }
    return LiteDBContext.instance;
  }
}
// Export a single instance to prevent multiple connections
module.exports = new LiteDBContext();
