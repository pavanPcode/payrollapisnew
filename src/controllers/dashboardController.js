const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

router.get('/getdashboardcount',validateToken, async (req, res, next) => {
    const { superid, selectedDate } = req.query;
    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {
        superid:superid,
        selectedDate: selectedDate,

    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().dashboard);
});







module.exports = router;