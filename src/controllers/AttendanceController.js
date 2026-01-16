const express = require('express');
const router = express.Router();
const {getAddressFromGoogle} = require("../utils/geoLocation");
const { DbDataByOperationId,DbDataByOperationId_no_Res } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const { RequestError } = require('mssql');
// const { handleResponse,Sp_handleResponse,Sp_handleResponse_no_res,handleResponse_no_res } = require('../utils/responseHandler');

router.get('/getPunchType',validateToken, async (req, res, next) => {
        const { regid } = req.query;
        // const { lat } = req.query;
        // const { long } = req.query;
        // if (!regid) return res.status(400).json({ message: "Missing required parameter - regid" });
        if (!regid)  return utilityhandleResponse(res, false, "Missing required parameter - regid", 400);

        // let address = null;
        // if (lat && long) {
        //     console.log("Fetching address...");
        //     address = await getAddressOpenStreetMap(lat, long);
        //     console.log("Address received:", address);
        // }


        const requestObj = {regid:regid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getPunchType);
    });

router.get('/getempattendance',validateToken, async (req, res, next) => {
        const { regid,superid,fromdate,todate } = req.query;
        console.log(regid,superid,fromdate,todate)
        if (!regid || !superid || !fromdate || !todate) {
            // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
            return utilityhandleResponse(res, false, "Missing required parameters: regid, superid, fromdate, or todate." , 400);
        }

        const requestObj = {
            regid: regid,
            superid: superid,
            todate: todate,
            fromdate: fromdate};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getattendance);
    });    


router.get('/getattendanceForAdmin',validateToken, async (req, res, next) => {
    const { Superid,regid,startdate,enddate } = req.query;

    // If regid is '' or 'None' (case-insensitive), set it to the string 'regid'
    const finalRegid = (!regid || regid.toLowerCase() === 'none') ? 'regid' : regid;

    

    if (!Superid) {
        // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
        return utilityhandleResponse(res, false, "Missing required parameters: Superid" , 400);
    }
    // Create the request data object
    const requestObj = {
        regid: finalRegid,
        Superid: Superid,
        startdate: startdate,
        enddate: enddate,
        
    };
    console.log(requestObj)
    const userObj = req.user;
    //if (!superId) return res.status(400).json({ message: "Missing required parameters" });
    return DbDataByOperationId(requestObj,userObj, res, OperationEnums().getteamattforad);
});


router.get('/getAttendancebystatus',validateToken, async (req, res, next) => {
        const { InStatus,SuperId,selectedDate} = req.query;
        console.log(InStatus,SuperId,selectedDate)
        if (!InStatus || !SuperId || !selectedDate) {
            return utilityhandleResponse(res, false, "Missing required parameters: InStatus, SuperId, fromdate, or todate." , 400);
        }   
        //gvPresent.DataSource = "P";
        // gvLate.DataSource = "L";
        // gvAbsent.DataSource = "A";
        // gvLeave.DataSource = "LV";
        // gvOnDuty.DataSource =  "D";
        const requestObj = {
            InStatus: InStatus,
            SuperId: SuperId,
            selectedDate: selectedDate,
        };
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getAttendancebystatus);
    });    


router.post('/writeswipe',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        console.log(Data,'userObj',userObj)
        return DbDataByOperationId(Data, userObj, res, OperationEnums().writeswipe);
    });
router.post('/writeswipewithLocation',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        const result = await getAddressFromGoogle(Data.latitude, Data.longitude);

        if (result.status) {
            address = result.address;
        } else {
            address = ""; // fallback if address not found
        }
        Data.address = address;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().writeswipe);
    });
router.post('/updateManualAttendance',validateToken, async (req, res, next) => {
        const Data = req.body;
        const inputdata = Data.inputdata;

        // Convert the updated object to a JSON string
        const data_string = JSON.stringify(inputdata);
        // Extract "DaySwipes" and convert it to a JSON string
        const swipedata = Data['DaySwipes'];
        const swipedata_string = JSON.stringify(swipedata);

        const requestObj = {
            data: data_string,
            DaySwipes: swipedata_string};
        
        console.log('requestObj',requestObj)
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().upManualAtd);
    });
router.get('/getNextPunchType',validateToken, async (req, res, next) => {
    try {
        const { regid } = req.query;
        if (!regid ) {
            // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
            return utilityhandleResponse(res, false, "Missing required parameters: superid or regid" , 400);
        }
        const requestObj = {
            regid: regid};

        const userObj = req.user;
        const nextPunch = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().getPunchType);
        if (!nextPunch.status) {
            return utilityHandleResponse(res, false, DayInOut.message, 500);
        }
        let result = nextPunch.ResultData[0]; 
        return utilityhandleResponse(res, true, 'Query executed successfully.' , 200,result);
        }
    catch (error) {
        // console.error("Error in /writeswipe:", error);
        return utilityhandleResponse(res, false, error , 500);

        }
});
router.get('/getSwipes',validateToken, async (req, res, next) => {
    try {
        const { superid,regid,date } = req.query;
        if (!superid || !regid || !date ) {
            // return res.status(400).json({ message: "Missing required parameters: regid, superid, fromdate, or todate." });
            return utilityhandleResponse(res, false, "Missing required parameters: superid or regid or date." , 400);
        }
        const requestObj = {
            superid: superid,
            regid: regid,
            date: date};

        const userObj = req.user;
        const DayInOut = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().DayInOut);
        if (!DayInOut.status) {
            return utilityHandleResponse(res, false, DayInOut.message, 500);
        }
        let DayInOutres = DayInOut.ResultData[0]; // Declare it globally so it can be used later
        // console.log(DayInOutres)
    
        const DaySwipes = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().DaySwipes);
        // console.log("Response Data response2:", DaySwipes); 

        let DaySwipesres = null; // Declare variable outside
        // Check if status is true
        if (DaySwipes.status) {
            DaySwipesres = DaySwipes.ResultData;
            // console.log("Saved ResultData:", DaySwipesres);
        }
        DayInOutres.DaySwipes =  DaySwipesres
        return utilityhandleResponse(res, true, 'Query executed successfully.' , 200,DayInOutres);
        }
    catch (error) {
        // console.error("Error in /writeswipe:", error);
        return utilityhandleResponse(res, false, error , 500);

        }
});



router.get('/getAttendancebystatusoflast7days',validateToken, async (req, res, next) => {
    const { SuperId,currentdates} = req.query;
        console.log(SuperId,currentdates)
        if ( !SuperId || !currentdates) {
            return utilityhandleResponse(res, false, "Missing required parameters:  SuperId,  todate." , 400);
        } 
    const requestObj= {
        SuperId: SuperId,
        currentdates: currentdates,
    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getAttendance7daysstatus);
});    


router.post('/BulkManualAttendance',validateToken, async (req, res, next) => {
    const Data = req.body;
    const regidsRaw = Data.regids.replace(/'/g, '"');  // Replace single quotes with double quotes
    const regids = JSON.parse(regidsRaw);              // Convert string to array of objects

    const userObj = req.user;
    Data.regids = regids;  // ✅ Add parsed regids back to the Data object


    return DbDataByOperationId(Data, userObj, res, OperationEnums().createbulkatt);
});

module.exports = router;




