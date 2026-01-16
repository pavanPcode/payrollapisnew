const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');


router.post('/createdepartment',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createdept);
    });

router.post('/updatedepartment',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updatedeptt);
    });

router.post('/deletedepartment',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deletedept);
    });

router.get('/getdepartment',validateToken, async (req, res, next) => {
        const { superid } = req.query;
        if (!superid ) {
            return utilityhandleResponse(res, false, "Missing required parameters: superid." , 400);
        }

        const requestObj = {
            superid: superid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getdept);
    });    
            
router.get('/getEmpByDept',validateToken, async (req, res, next) => {
        const { departmentid,superid} = req.query;
        if (!departmentid || !superid ) {
            return utilityhandleResponse(res, false, "Missing required parameters: departmentid,superid." , 400);
        }
        const requestObj = {
            departmentid: departmentid,
            superid: superid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getEmpByDept);
    });    

module.exports = router;