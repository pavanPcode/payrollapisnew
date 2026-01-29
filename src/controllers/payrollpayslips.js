const express = require('express');
const router = express.Router();
const { DbDataByOperationId ,DbDataByOperationId_no_Res} = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

function formatPayslipData(rows) {
    const grouped = {};

    rows.forEach(row => {
        const key = `${row.RegId}_${row.PayperiodId}`;

        if (!grouped[key]) {
            grouped[key] = {
                RegId: row.RegId,
                CardId: row.CardId,
                BadgeId:row.Badge,
                UserName: row.UserName,
                BranchId: row.BranchId,
                Branch: row.Branch,
                DeptId: row.DeptId,
                Department: row.Department,
                Designation: row.Designation,
                PayperiodId: row.PayperiodId,
                PayPeriodName: row.PayPeriodName,
                GrossPay: row.GrossPay,
                NetSalary: row.NetSalary,
                OrgName:row.OrgName,
                DateOfJoining:row.DateOfJoining,
                PAN	:row.PAN,
                Adhaar	:row.Adhaar,
                VoterId	:row.VoterId,
                PF	:row.PF,
                ESI	:row.ESI,
                UAN	:row.UAN,
                PresentDays	:row.PresentDays,
                WorkingDays	:row.WorkingDays,
                Absents :row.Absents,
                NPLeaves :row.NPLeaves,
                LOP	:row.LOP,
                Leaves	:row.Leaves,
                MonWeekOffs	:row.MonWeekOffs,
                OtTime	:row.OtTime,
                EarningsTotal :row.Earnings,
                DeductionsTotal :row.Deductions,
                Earnings: [],
                Deductions: []
            };
        }

        const salaryObj = {
            SalaryHeadId: row.SalaryHeadId,
            SalaryHead: row.SalaryHead,
            Amount: row.Paid
        };

        if (row.SalaryType === true) {
            grouped[key].Earnings.push(salaryObj);
        } else {
            grouped[key].Deductions.push(salaryObj);
        }
    });

    return Object.values(grouped);
}

router.get('/getpayslips', validateToken, async (req, res) => {
    const { SuperId, PayperiodId, RegId, BranchId,DeptId } = req.query;

     const requestObj = {
        SuperId: SuperId ,
        PayperiodId: PayperiodId || 0,
        RegId: RegId || 0,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0,

    };
    const userObj = req.user;

    lastResult = await DbDataByOperationId_no_Res(
                    requestObj,
                    userObj,
                    OperationEnums().getpayslippr
                );
    const dbResult = lastResult.ResultData; // your DB result
    const formattedData = formatPayslipData(dbResult);

    return res.json({
        status: true,
        ResultData: formattedData
    });

});



router.get('/getlast3payslips', validateToken, async (req, res) => {
    const { SuperId,  RegId  } = req.query;

     const requestObj = {
        SuperId: SuperId ,
        RegId: RegId,
    };
    const userObj = req.user;

    lastResult = await DbDataByOperationId_no_Res(
                    requestObj,
                    userObj,
                    OperationEnums().getlast3payslipspr
                );
    const dbResult = lastResult.ResultData; // your DB result
    const formattedData = formatPayslipData(dbResult);

    return res.json({
        status: true,
        ResultData: formattedData
    });

});


// router.get('/getpayslips', validateToken, async (req, res) => {

//     const {
//         BranchId = 0,
//         DeptId = 0,
//         EmployeeId = 0,
//         PayPeriodId = 0,
//         SuperId = 0
//     } = req.query;

//     const requestObj = {
//         BranchId: parseInt(BranchId),
//         DeptId: parseInt(DeptId),
//         EmployeeId: parseInt(EmployeeId),
//         PayPeriodId: parseInt(PayPeriodId),
//         SuperId: parseInt(SuperId)
//     };

//     const userObj = req.user;

//     return DbDataByOperationId(
//         requestObj,
//         userObj,
//         res,
//         OperationEnums().payslipsGet
//     );
// });


module.exports = router;