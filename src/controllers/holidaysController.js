const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

router.get('/getholidays',validateToken, async (req, res, next) => {
    const { superid,year } = req.query;
    if (!superid || !year) {
        return utilityhandleResponse(res, false, "Missing required parameters: superid, year." , 400);
    }

    // Start and end dates of the year in 'YYYY-MM-DD' format
    const startDate = `${year}-01-01`;
    const endDate = `${year}-12-31`;

    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {
        superid:superid,
        startdate:startDate,
        enddate:endDate
    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getholidays);
});

router.post('/createHolidays',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().createHolidays);
});

router.post('/updateholiday',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().updateholiday);
});

router.post('/deleteholiday',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteholiday);
});

module.exports = router;