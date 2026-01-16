const DbContext = require('./sqlContext');

class StandardDBContext extends DbContext {
  constructor() {
    if (!StandardDBContext.instance) {
      super('rcstddb'); // Pass the database name
      StandardDBContext.instance = this;
    }
    return StandardDBContext.instance;
  }
}

module.exports = new StandardDBContext();
