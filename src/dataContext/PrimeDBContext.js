const DbContext = require('./sqlContext');

class PrimeDBContext extends DbContext {
  constructor() {
    if (!PrimeDBContext.instance) {
      super('rcprimedb'); // Pass the database name
      PrimeDBContext.instance = this;
    }
    return PrimeDBContext.instance;
  }
}

module.exports = new PrimeDBContext();
