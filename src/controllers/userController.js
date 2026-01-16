const express = require('express');
const router = express.Router();
const PrimeDB = require('../dataContext/PrimeDBContext.js');
const JWTSECRET = require('../../config').JWT_SECRET;

router.post('/login', async (req, res, next) => {
  try {
    const {username,password} = req.body;
    if (!username || !password) {
      return res.status(400).json({ status: false, message: "❌ Email and password are required" });
    }
    const query = `select ORG.LicenseKey + '-' + CAST(CFG.DBStoreId AS VARCHAR(50)) AS token,MRC.* from [PROD].[MyRollCallUsers] MRC 
    INNER JOIN dbo.OrgLicense ORG ON MRC.SuperId = ORG.SuperId 
    INNER JOIN dbo.OrgConfig CFG ON MRC.SuperId = CFG.SuperId
    Where Badge = @username AND password = @password`
    const params = { username: username, password: password };

    const result = await PrimeDB.executeQuery(query, params);
    // console.log('result',result)
    if (!result || result.length === 0) {
      return res.status(401).json({ status: false, message: "❌ Invalid credentials" });
    }
    const user = result[0];

    // Create JWT token with user details and LicenseType all
    const userResult = {
      RegId: user.RegId,
      UserName: user.UserName,
      SuperId: user.SuperId,
      Token: user.token,
      Emailid: user.EmailId,
      LastLogin: user.LastLogin,
      IsAdmin: user.IsAdmin,
      Badge: user.Badge,
      DeviceId: user.DeviceId,
      IsAdminApp: user.IsAdminApp,
      aadhardeviceid: user.aadhardeviceid,
      DeviceSDK: user.DeviceSDK,
      RCFace: user.RCFace,
    };
//Can implement the below later stage
    //const token = jwt.sign(tokenPayload, JWTSECRET, { expiresIn: '1h' });

    // 🔹 Return token to client
    return res.status(200).json({
      status: true,
      message: "Login successful",
      ResultData: userResult
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    next(error);
  }
});

module.exports = router;