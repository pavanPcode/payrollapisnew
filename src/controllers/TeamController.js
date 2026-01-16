const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const { Console } = require('winston/lib/winston/transports');




router.post('/addteammember',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(Data,userObj, res, OperationEnums().addteammember);
});


router.post('/deleteteammember',validateToken, async (req, res, next) => {
    const Data = req.body;
    console.log(Data)
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteteammember);
});

router.get('/getmyteamattendance',validateToken, async (req, res, next) => {
    const { managerid,regid,startdate,enddate } = req.query;
    

    if (!managerid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: managerid" , 400);
    }
    const finalregid = (!regid || regid.toLowerCase() === 'none') ? 'regid': regid;
    // Create the request data object
    const requestObj = {
        regid: finalregid,
        managerid: managerid,
        startdate: startdate,
        enddate: enddate,
        
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getteamattendance);
});



router.get('/getmyteamleaves',validateToken, async (req, res, next) => {
    const { managerid,regid,year,status } = req.query;
    

    if (!managerid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: managerid" , 400);
    }
    const finalregid = (!regid || regid.toLowerCase() === 'none') ? 'regid': regid;
    const finalstatus = (!status || status.toLowerCase() === 'none') ? 'status' : status;
    // Create the request data object
    const requestObj = {
        regid: finalregid,
        managerid: managerid,
        year: year,
        status:finalstatus
        
    };
    console.log(requestObj)
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getteamleaves);
});


router.get('/getmyteam',validateToken, async (req, res, next) => {
    const { managerid } = req.query;

    if (!managerid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: managerid." , 400);
    }
    // Create the request data object
    const requestObj = {
        managerid: managerid
        
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getmyteam);
});


router.get('/getDayInOutDetailsEMPManager',validateToken, async (req, res, next) => {
    const { ManagerId ,regid,date } = req.query;

    if (!ManagerId || ManagerId.trim() === '') {
        // return res.json(cut.InvalidResult('required Manager'));
        return utilityhandleResponse(res, false, "required Manager." , 400);
    }
    if (!date || date.trim() === '') {
        // return res.json(cut.InvalidResult('select Date'));
        return utilityhandleResponse(res, false, "Missing required parameters: DateOfTransaction." , 400);
    }

    // If regid is missing or empty, assign a default value (optional)
    const regidValue = regid && regid.trim() !== '' ? regid : 'Regid';


    if (!ManagerId) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: managerid." , 400);
    }
    // Create the request data object
    const requestObj = {
        ManagerId: ManagerId,
        regid:regidValue,
        DateOfTransaction:date
    };
    console.log(requestObj)
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getDayInOutDetailsEMPManager);
});

router.get('/IsManager',validateToken, async (req, res, next) => {
    const { regid } = req.query;

    if (!regid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: regid." , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: regid
        
    };
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().ismanager);
});




// router.get('/getleavesummary',validateToken, async (req, res, next) => {
//     const { year,regid } = req.query;

//     if (!year || !regid) {
//         // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
//         return utilityhandleResponse(res, false, "Missing required parameters: year, regid." , 400);
//     }
//     // Create the request data object
//     const requestObj = {
//         regid: regid,
//         year: year
        
//     };
//     const userObj = req.user;
//     //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
//     return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getleavesummary);
// });


module.exports = router;
