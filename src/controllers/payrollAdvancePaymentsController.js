const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.post('/AddAdvancePayments',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().AddAdvancePayments);
});

router.post('/deleteAdvancePayments',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteAdvancePayments);
});



router.get('/getSalaryAdvances', validateToken, async (req, res, next) => {
    const { SuperId, EmployeeId, BranchId, DeptId } = req.query;

    const requestObj = {
        SuperId: SuperId || 0,
        EmployeeId: EmployeeId || 0,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0,
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getSalaryAdvances
    );
});

router.get('/getAdvancePaymentsHistory', validateToken, async (req, res, next) => {
    const { AdvancePaymentId } = req.query;

    const requestObj = {
        AdvancePaymentId: AdvancePaymentId 
    };

    const userObj = req.user;
    console.log('requestObj',requestObj)
    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getAdvancePaymentsHistory
    );
});




module.exports = router;