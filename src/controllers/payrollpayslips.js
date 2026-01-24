const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getpayslips', validateToken, async (req, res) => {

    const {
        BranchId = 0,
        DeptId = 0,
        EmployeeId = 0,
        PayPeriodId = 0,
        SuperId = 0
    } = req.query;

    const requestObj = {
        BranchId: parseInt(BranchId),
        DeptId: parseInt(DeptId),
        EmployeeId: parseInt(EmployeeId),
        PayPeriodId: parseInt(PayPeriodId),
        SuperId: parseInt(SuperId)
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().payslipsGet
    );
});


module.exports = router;