const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.post('/resignEmp',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().resignEmp);
});

router.post('/rejoinEmp',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().rejoinEmp);
});

router.get('/getTerminatedlist',validateToken, async (req, res, next) => {
        const { superid } = req.query;
        if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
        const requestObj = {superid:superid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().Terminatedlist);
    });


module.exports = router;