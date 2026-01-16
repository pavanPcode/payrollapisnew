const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

router.post('/requestVisitingPass',validateToken, async (req, res, next) => {
    const Data = req.body;
    
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(Data,userObj, res, OperationEnums().requestPass);
});

router.post('/updatetVisitingPass',validateToken, async (req, res, next) => {
    const Data = req.body;
    
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(Data,userObj, res, OperationEnums().updatetVisitingPass);
});

router.get('/getVisitingPass',validateToken, async (req, res, next) => {
    const { regid } = req.query;

    if (!regid) {
        return utilityhandleResponse(res, false, "Missing required parameters: regid." , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: regid
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getVisitingPass);
});


router.get('/getAttendeesDetails',validateToken, async (req, res, next) => {
    const { passid } = req.query;

    if (!passid) {
        return utilityhandleResponse(res, false, "Missing required parameters: passid." , 400);
    }
    // Create the request data object
    const requestObj = {
        passid: passid
    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getAttendeesDetails);
});

module.exports = router;




