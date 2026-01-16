const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');


router.get('/getleavetype',validateToken, async (req, res, next) => {
    // Create the request data object
    const requestObj = {};
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().GETLEAVETYPE);
});

router.post('/createLeaveTypes',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().creLeaveTypes);
});

router.post('/updateLeaveTypes',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().upLeaveTypes);
});

router.post('/deleteLeaveTypes',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data,userObj, res, OperationEnums().delLeaveTypes);
});

router.post('/updateleave',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(Data,userObj, res, OperationEnums().updateleave);
});


router.post('/saveleave',validateToken, async (req, res, next) => {
    const Data = req.body;
    const inputdata = Data.inputdata;

    // const requestObj = {
    //     superid:inputdata.superid,
    //     regid: inputdata.regid,
    //     inputdata: inputdata.lvtypeid ,
    //     startdate:inputdata.startdate  ,
    //     enddate:inputdata.enddate  ,
    //     leavecount:inputdata.leavecount  ,
    //     comments: inputdata.comments ,
    //     createdby:inputdata.createdby 
    // };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(inputdata,userObj, res, OperationEnums().CREATELEAVE);
});

router.get('/getempleaves',validateToken, async (req, res, next) => {
    const { year,regid,superid } = req.query;

    if (!year || !superid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: year, superid." , 400);
    }
    // Construct start and end dates
    const stardate = `${year}-01-01`;
    const enddate = `${year}-12-31`;
    const finalregid = (!regid || regid.toLowerCase() === 'none') ? 'regid': regid;
    // Create the request data object
    const requestObj = {
        regid: finalregid,
        superid: superid,
        StartDt: stardate,
        EndDt: enddate,
    };
    console.log(requestObj)
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().GETEMPLEAVES);
});

router.get('/getleaveaccruals',validateToken, async (req, res, next) => {
    const { year,regid } = req.query;

    if (!year || !regid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: year, regid." , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: regid,
        year: year
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getaccruals);
});

router.get('/getleavesummary',validateToken, async (req, res, next) => {
    const { year,regid } = req.query;

    if (!year || !regid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: year, regid." , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: regid,
        year: year
        
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getleavesummary);
});

router.get('/getLeaveAccrualsForAdmin',validateToken, async (req, res, next) => {
    const { Year,SuperId } = req.query;

    if (!Year || !SuperId) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: Year,SuperId." , 400);
    }
    // Create the request data object
    const requestObj = {
        Year: Year,
        SuperId: SuperId
        
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getaccuralsad);
});

module.exports = router;
