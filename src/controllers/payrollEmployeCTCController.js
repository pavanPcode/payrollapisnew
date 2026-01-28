const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');


router.get('/getNewEmpListForctcadd',validateToken, async (req, res, next) => {
    const { superid,BranchId,DeptId } = req.query;
    // if (!regid) return res.status(400).json({ message: "Missing required parameter - regid" });
    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {superid:superid,
        BranchId: BranchId || 0,
        DeptId: DeptId || 0

    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getNewEmpListForctcadd);
});

router.post('/addEmpCtc',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().addEmpCtc);
});

router.post('/UpdateEmpCtc',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().UpdateEmpCtc);
});

router.get('/getSalaryGroupMaster', validateToken, async (req, res, next) => {
    const { SuperId } = req.query;

    const requestObj = {
        SuperId: SuperId 
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getSalaryGroupMaster
    );
});

router.get('/getctcreport', validateToken, async (req, res, next) => {
    const { EmployeeId,SuperId,BranchId,DeptId } = req.query;

    const requestObj = {
        EmployeeId: EmployeeId || 0,
        SuperId: SuperId || 0,
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

router.get('/GetctcdetailsForEmp', validateToken, async (req, res, next) => {
    const { OrgSalaryId } = req.query;

    const requestObj = {
        OrgSalaryId: OrgSalaryId 
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().ctcGetdetails
    );
});

router.get('/GetEmpCtcHistory', validateToken, async (req, res, next) => {
    const { RegId } = req.query;

    const requestObj = {
        RegId: RegId 
    };
    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().GetEmpCtcHistory
    );
});


module.exports = router;