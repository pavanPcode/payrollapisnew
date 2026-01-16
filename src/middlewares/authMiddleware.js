const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    
    req.user = {
      userId: decoded.userId,
      superId: decoded.superId,
      role: decoded.role,  // First string from token
      licenseType: decoded.licenseType  // Second string from token
    };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
const validateToken=(req, res, next) => {
  //const authtoken = req.query.token;
  // For testing commented below
  const authtoken = req.headers['authorization'];
  
  if (!authtoken) {
    return res.status(401).send('Access denied. No token provided.');
  }
//Bearer 5a110280-d16a-4000-0001-df25a9193343
//   if (token !== fixedTokenKey) {
//     return res.status(403).send('Access denied. Invalid token.');
//   }
    // Attach token and user data to request
  const token = authtoken.replace("Bearer ", "");
  const lastHyphenIndex = token.lastIndexOf('-');
  const dbstoreId = token.substring(lastHyphenIndex + 1);
  //req.token = token;
  req.user = {
    superId: token.slice(3, 8),
    role: 0,  // Not used Yet
    // dbType: parseInt(token.substring(15, 18),10)
    dbType: dbstoreId
  };
  req.licensevalid = true;//TokenValidation.verifyLicense(token);
  //req.dbtype = parseInt(dbtype, 10);
  //req.rctype = parseInt(rctype,10) // This tells if it is RCLite or RCStd or RCPremium

  if (!req.licensevalid) {
    return res.status(403).send('Subscription is Ended.Please contact admin');
  }
  
  next();
};

module.exports = {
  authMiddleware,
  validateToken
}
