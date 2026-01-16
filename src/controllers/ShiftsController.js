const express = require('express');
const router = express.Router();
const { DbDataByOperationId,DbDataByOperationId_no_Res } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
// const { handleResponse,Sp_handleResponse,Sp_handleResponse_no_res,handleResponse_no_res } = require('../utils/responseHandler');


router.get('/getShiftsTypes',validateToken, async (req, res, next) => {
    const { superid } = req.query;
    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {superid:superid};
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getShiftsTypes);
});

router.get('/getAssignshiftByEmp',validateToken, async (req, res, next) => {
    const { regid } = req.query;
    if (!regid)  return utilityhandleResponse(res, false, "Missing required parameter - regid", 400);
    const requestObj = {regid:regid};
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getAsgsftEmp);
});

router.get('/getEmpByShift',validateToken, async (req, res, next) => {
    const { shiftid,superid} = req.query;
        if (!shiftid || !superid ) {
            // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
            return utilityhandleResponse(res, false, "Missing required parameters: shiftid or superid." , 400);
        }
    const requestObj = {shiftid:shiftid,superid:superid};
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getEmpByShift);
});



router.post('/assignShifts', validateToken, async (req, res, next) => {
    try {
        const Data = req.body;
        const userObj = req.user;

        let lastResult = null; // Variable to store only the last processed data

        for (const regid of Data.regid) {
            const requestObj = {
                regid: regid,
                shiftid: Data.shiftid,
                startdate: Data.startdate,
                enddate: Data.enddate
            };
            lastResult = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().assignshift);
        }

        return res.status(200).json(lastResult);
    } catch (error) {
        console.log(error)
        // next(error); // Pass error to Express error handler
        return utilityhandleResponse(res, false, error , 500);
    }
});


router.get('/getShiftCountByDate', validateToken, async (req, res, next) => {
    const { DateOfTransaction, SuperId } = req.query;
    if (!DateOfTransaction || !SuperId) {
        return utilityhandleResponse(res, false, "Missing required parameters: DateOfTransaction or SuperId.", 400);
    }
    const requestObj = { DateOfTransaction: DateOfTransaction, SuperId: SuperId };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getShiftCountByDate);
});


// Export the router to be used in the app
module.exports = router;
