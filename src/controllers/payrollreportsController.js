const express = require('express');
const router = express.Router();
const { DbDataByOperationId ,DbDataByOperationId_no_Res,DbDataByOperationId_header} = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');


router.get('/getAdvancePaymentsReports', validateToken, async (req, res, next) => {
    const { SuperId, EmployeeId, DeptId } = req.query;

    const requestObj = {
        SuperId: SuperId,
        EmployeeId: EmployeeId || 0,
        DeptId: DeptId || 0,
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getAdvancePaymentsReports
    );
});



router.get('/getpayrollReports',validateToken, async (req, res, next) => {
    console.log("Query Params:", req.query); // Debugging

    const superid = req.query.superid;
    const reportiid = req.query.reportiid;
    const PayperiodId = req.query.PayperiodId ? parseInt(req.query.PayperiodId) : 'null';
    const RegId = req.query.RegId ? parseInt(req.query.RegId) : 'null';
    const DeptId = req.query.DeptId ? parseInt(req.query.DeptId) : 'null';
    const BranchId = req.query.BranchId ? parseInt(req.query.BranchId) : 'null';

    if (!superid || superid.trim() === '') {
        return utilityhandleResponse(res, false, 'required superid parameter' , 400);}
    if (!reportiid || reportiid.trim() === '') {
        return utilityhandleResponse(res, false, 'required reportiid parameter'  , 400);}
    

    const requestObj = {
        superid: superid,
        reportiid: reportiid,
        RegId: RegId,
        DeptId: DeptId,
        BranchId: BranchId,
        PayperiodId:PayperiodId
    };


    const userObj = req.user;

    lastResult = await DbDataByOperationId_header(requestObj, userObj, OperationEnums().getpayrollReports);

    return res.status(200).json(lastResult);

});

module.exports = router;