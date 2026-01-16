const DbContext = require('./sqlContext');

class PremiumDBContext extends DbContext {
  constructor() {
    if (!PremiumDBContext.instance) {
      super('rcpremiumdb'); // Pass the database name
      PremiumDBContext.instance = this;
    }
    return PremiumDBContext.instance;
  }
}

module.exports = new PremiumDBContext();
