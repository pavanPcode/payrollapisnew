const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getPayPeriod', validateToken, async (req, res, next) => {
    const { SuperId,BranchId  } = req.query;

    if (!SuperId ) {
        return res.status(400).json({ message: 'SuperId and BranchId  are required' });
    }
    const requestObj = {
        SuperId: SuperId,
        BranchId:BranchId
    };
    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getPayPeriod // You need to add this enum
    );
});


router.get('/PayrollImportedAttendance', validateToken, async (req, res, next) => {
    const { SuperId, PayPeriodId,IsInsertInToAttendance,BranchId  } = req.query;

    if (!SuperId || !PayPeriodId || !IsInsertInToAttendance || !BranchId) {
        return res.status(400).json({ message: 'SuperId and PayPeriodId and IsInsertInToAttendance  and  BranchId are required' });
    }

    const requestObj = {
        SuperId: SuperId,
        PayPeriodId: PayPeriodId,
        IsInsertInToAttendance:IsInsertInToAttendance,
        BranchId,BranchId
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().PayrollImportedAttendance // You need to add this enum
    );
});


router.get('/PayrollProcessBranchWise', validateToken, async (req, res, next) => {
    const { ProcessingUser , PayperiodId,BranchId  } = req.query;

    if (!ProcessingUser || !PayperiodId  || !BranchId) {
        return res.status(400).json({ message: 'ProcessingUser and PayperiodId   and  BranchId are required' });
    }

    const requestObj = {
        ProcessingUser: ProcessingUser,
        PayperiodId: PayperiodId,
        BranchId,BranchId
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().PayrollProcessBranchWise // You need to add this enum
    );
});

router.get('/GetEmployeePayReport', validateToken, async (req, res, next) => {
    const {  PayPeriodId,BranchId  } = req.query;

    if (!PayPeriodId  || !BranchId) {
        return res.status(400).json({ message: ' PayPeriodId   and  BranchId are required' });
    }

    const requestObj = {
        PayPeriodId: PayPeriodId,
        BranchId,BranchId
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().GetEmployeePayReport // You need to add this enum
    );
});

module.exports = router;