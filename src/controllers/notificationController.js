const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getNotification',validateToken, async (req, res, next) => {
    const { superid , regid} = req.query;

    if (!regid || !superid) {
        return utilityhandleResponse(res, false, "Missing required parameters: regid or superid." , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: regid,
        superid: superid
    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getNotifys);
});

module.exports = router;




