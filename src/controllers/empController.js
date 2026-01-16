const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

router.get('/getempprofile',validateToken, async (req, res, next) => {
    const { regid } = req.query;
    // if (!regid) return res.status(400).json({ message: "Missing required parameter - regid" });
    if (!regid)  return utilityhandleResponse(res, false, "Missing required parameter - regid", 400);
    const requestObj = {regid:regid};
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getempprofile);
});


router.get('/getemployees',validateToken, async (req, res, next) => {
    const { superid } = req.query;
    // if (!regid) return res.status(400).json({ message: "Missing required parameter - regid" });
    if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
    const requestObj = {superid:superid};
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getemployees);
});


router.post('/createEmployee',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    const EmpObj = {"InputEmployeeJson": Data};
    return DbDataByOperationId(EmpObj,userObj, res, OperationEnums().createEmp);
});

router.post('/updateEmployee',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    const EmpObj = {"InputEmployeeJson": Data};
    return DbDataByOperationId(EmpObj,userObj, res, OperationEnums().updateEmployee);
});

router.post('/deleteEmployee',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteEmployee);
});


router.get('/getEmployee',validateToken, async (req, res, next) => {
    const { superid, departmentid, regid } = req.query;

    if (!superid) {
        return utilityhandleResponse(res, false, "Missing required parameter: superid.", 400);
    }
    
    // Use the existing value if available; otherwise, assign default values
    const deptId = departmentid && departmentid.trim() !== '' ? departmentid : 'ed.DeptId';
    const regId = regid && regid.trim() !== '' ? regid : 'r.id';
    
    const requestObj = {
        departmentid: deptId,
        superid: superid,
        regid: regId
    };
    console.log(requestObj)
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getEmployee);
    });    

    
router.post('/createRegBankDetails',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data,userObj, res, OperationEnums().creRegBankDet);
    });

router.post('/deleteRegBankDetails',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data,userObj, res, OperationEnums().delRegBankDet);
    });

router.post('/updateRegBankDetails',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data,userObj, res, OperationEnums().updRegBankDet);
    });

router.get('/getRegBankDetails',validateToken, async (req, res, next) => {
        const {  regid } = req.query;
        if (!regid) {
            return utilityhandleResponse(res, false, "Missing required parameter: regid.", 400);
        }
        const requestObj = {
            regid: regid,
            
        };
            const userObj = req.user;
            return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getRegBankDet);
        }); 

router.post('/createRegProofs',validateToken, async (req, res, next) => {
            const Data = req.body;
            const userObj = req.user;
            return DbDataByOperationId(Data,userObj, res, OperationEnums().creRegProof);
        });
router.post('/updateRegProofs',validateToken, async (req, res, next) => {
            const Data = req.body;
            const userObj = req.user;
            return DbDataByOperationId(Data,userObj, res, OperationEnums().upRegProof);
        });
router.get('/getRegProofs',validateToken, async (req, res, next) => {
            const {  regid} = req.query;
            if (!regid ) {
                return utilityhandleResponse(res, false, "Missing required parameter: regid", 400);
            }
            const requestObj = {
                regid: regid,
                
            };
                const userObj = req.user;
                return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getRegProofs);
            }); 

router.post('/createRegDetails',validateToken, async (req, res, next) => {
                const Data = req.body;
                const userObj = req.user;
                return DbDataByOperationId(Data,userObj, res, OperationEnums().creRegDet);
            });
router.post('/updateRegDetails',validateToken, async (req, res, next) => {
                const Data = req.body;
                const userObj = req.user;
                return DbDataByOperationId(Data,userObj, res, OperationEnums().upRegDet);
            });
router.get('/getRegDetails',validateToken, async (req, res, next) => {
                const {  regid } = req.query;
                if (!regid) {
                    return utilityhandleResponse(res, false, "Missing required parameter: regid.", 400);
                }
                const requestObj = {
                    regid: regid,
                    
                };
                    const userObj = req.user;
                    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getRegDet);
                }); 
                
router.post('/createRegFamily',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().creRegFamily);
});
router.post('/updateRegFamily',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().updRegFamily);
});
router.get('/getRegFamily',validateToken, async (req, res, next) => {
    const {  regid } = req.query;
    if (!regid ) {
        return utilityhandleResponse(res, false, "Missing required parameter: regid.", 400);
    }
    const requestObj = {
        regid: regid,
       
    };
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().RegFamily);
    }); 


module.exports = router;