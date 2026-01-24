const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getemployees',validateToken, async (req, res, next) => {
    const { superid,BranchId,DeptId } = req.query;
    // if (!regid) return res.status(400).json({ message: "Missing required parameter - regid" });
    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {superid:superid,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0

    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getemployeespr);
});


router.get('/getsalaryreport', validateToken, async (req, res, next) => {
    const { BranchId, EmployeeId, PayPeriodId,DeptId,SuperId } = req.query;

    if (!SuperId) {
        return res.status(400).json({ message: 'SuperId are required' });
    }
    const requestObj = {
        BranchId: BranchId || 0,
        EmployeeId: EmployeeId || 0,
        PayPeriodId: PayPeriodId || 0,
        DeptId: DeptId || 0,
        SuperId:SuperId

    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().salaryReport
    );
});

router.get('/getRegExpenses', validateToken, async (req, res, next) => {
    const { SuperId } = req.query;

    if (!SuperId) {
        return res.status(400).json({ message: 'SuperId are required' });
    }
    const requestObj = {SuperId:SuperId}; // No filters

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().regExpenses
    );
});

router.get('/getPayRollProcessedStatus', validateToken, async (req, res, next) => {
    const { BranchId, PayPeriodId } = req.query;

    if (!BranchId || !PayPeriodId) {
        return res.status(400).json({ message: 'BranchId and PayPeriodId are required' });
    }

    const requestObj = {
        BranchId: parseInt(BranchId),
        PayPeriodId: parseInt(PayPeriodId)
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getPayRollProcessedStatus // You need to add this enum
    );
});

router.get('/getDepartmentWiseSalaries', validateToken, async (req, res, next) => {
    const { SuperId, Month,Year  } = req.query;

    if (!SuperId || !Month || !Year) {
        return res.status(400).json({ message: 'SuperId and Month and Year are required' });
    }

    const requestObj = {
        SuperId: SuperId,
        Month: Month,
        Year:Year
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().DepartmentWiseSalaries // You need to add this enum
    );
});


router.get('/getPayrollOverviewCount', validateToken, async (req, res, next) => {
    const { SuperId, Month,Year  } = req.query;

    if (!SuperId || !Month || !Year) {
        return res.status(400).json({ message: 'SuperId and Month and Year are required' });
    }

    const requestObj = {
        SuperId: SuperId,
        Month: Month,
        Year:Year
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getPayrollOverviewCount // You need to add this enum
    );
});


router.get('/getpayrollcounts', validateToken, async (req, res, next) => {

    const requestObj = {}; 

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getpayrollcounts
    );
});

// router.get('/getdepartmentwisesalariescount', validateToken, async (req, res, next) => {

//     const requestObj = {}; // No filters

//     const userObj = req.user;

//     return DbDataByOperationId(
//         requestObj,
//         userObj,
//         res,
//         OperationEnums().getdepartmentwisesalariescount
//     );
// });

// router.get('/getdpayrolloverviewcount', validateToken, async (req, res, next) => {

//     const requestObj = {}; // No filters

//     const userObj = req.user;

//     return DbDataByOperationId(
//         requestObj,
//         userObj,
//         res,
//         OperationEnums().getdpayrolloverviewcount
//     );
// });

// router.delete('/deleteAdvance', validateToken, async (req, res, next) => {
//     const { AdvanceId, UpdatedBy } = req.body;

//     if (!AdvanceId || !UpdatedBy) {
//         return res.status(400).json({ message: 'AdvanceId and UpdatedBy are required' });
//     }

//     const requestObj = {
//         AdvanceId,
//         UpdatedBy
//     };

//     const userObj = req.user;

//     return DbDataByOperationId(
//         requestObj,
//         userObj,
//         res,
//         OperationEnums().deleteAdvance // Add this in your OperationEnums with the DELETE SQL
//     );
// });

router.post('/deleteAdvance',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteAdvance);
});

//shivakumar apis

router.get('/getctcreport', validateToken, async (req, res, next) => {
    const { EmployeeId,SuperId,BranchId,DeptId } = req.query;

    const requestObj = {
        EmployeeId: EmployeeId || 0,
        SuperId: SuperId || 0 ,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().ctcGet
    );
});

router.get('/getPayPeriods', validateToken, async (req, res, next) => {
    const { SuperId } = req.query;

    const requestObj = {
        SuperId: SuperId || 0
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getPayPeriods
    );
});

router.get('/getSalaryList', validateToken, async (req, res, next) => {
    const { SuperId, EmployeeId, BranchId, DeptId, PayPeriodId } = req.query;

    const requestObj = {
         SuperId: SuperId || 0,
        EmployeeId: EmployeeId || 0,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0,
        PayPeriodId: PayPeriodId || 0
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getSalaryList
    );
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