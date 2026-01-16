const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');


router.post('/createproject',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createproject);
    });

router.post('/updateproject',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updateproject);
    });

router.post('/deleteproject',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deleteproject);
    });

router.get('/getproject',validateToken, async (req, res, next) => {
        const { managerid } = req.query;
        if (!managerid)  return utilityhandleResponse(res, false, "Missing required parameter - managerid", 400);
        const requestObj = {managerid:managerid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getproject);
    });

router.get('/getProjectsForEmp',validateToken, async (req, res, next) => {
        const { regid } = req.query;
        if (!regid)  return utilityhandleResponse(res, false, "Missing required parameter - regid", 400);
        const requestObj = {regid:regid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getProForEmp);
    });

router.post('/createprojectteam',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createprojectteam);
    });

router.post('/deleteprojectteam',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deleteprojectteam);
    });

router.get('/getprojectteam',validateToken, async (req, res, next) => {
        const { projectid } = req.query;
        if (!projectid)  return utilityhandleResponse(res, false, "Missing required parameter - projectid", 400);
        const requestObj = {projectid:projectid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getprojectteam);
    });


router.post('/deletemilestone',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deletemilestone);
    });

router.post('/createmilestone',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createmilestone);
    });

router.post('/updatemilestone',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updatemilestone);
    });

router.get('/getmilestone',validateToken, async (req, res, next) => {
        const { projectid } = req.query;
        if (!projectid)  return utilityhandleResponse(res, false, "Missing required parameter - projectid", 400);
        const requestObj = {projectid:projectid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getmilestone);
    });


router.post('/updatetask',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updatetask);
    });

router.post('/deletetask',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deletetask);
    });

router.post('/createtask',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createtask);
    });

router.get('/gettask',validateToken, async (req, res, next) => {
        const { projectid } = req.query;
        if (!projectid)  return utilityhandleResponse(res, false, "Missing required parameter - projectid", 400);
        const requestObj = {projectid:projectid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().gettask);
    });


router.post('/createtimesheet',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createtimesheet);
    });

router.post('/updatetimesheet',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updatetimesheet);
    });

router.post('/deletetimesheet',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deletetimesheet);
    });


router.get('/gettimesheetbyregid',validateToken, async (req, res, next) => {
        const { regid } = req.query;
        if (!regid)  return utilityhandleResponse(res, false, "Missing required parameter - regid", 400);
        const requestObj = {regid:regid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().gettsbyuser);
    });

router.get('/gettimesheetbytaskid',validateToken, async (req, res, next) => {
        const { taskid } = req.query;
        if (!taskid)  return utilityhandleResponse(res, false, "Missing required parameter - taskid", 400);
        const requestObj = {taskid:taskid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().gettsbytask);
    });



router.post('/deleteannouncemets',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().deleteannouncemets);
    });

router.post('/createannouncemets',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().createannouncemets);
    });

router.post('/updateannouncemets',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updateannouncemets);
    });

router.post('/updateannouncemetisread',validateToken, async (req, res, next) => {
        const Data = req.body;
        const userObj = req.user;
        return DbDataByOperationId(Data, userObj, res, OperationEnums().updateannouncemetisread);
    });

router.get('/getannouncemets',validateToken, async (req, res, next) => {
        const { superid } = req.query;
        if (!superid)  return utilityhandleResponse(res, false, "Missing required parameter - superid", 400);
        const requestObj = {superid:superid};
        const userObj = req.user;
        return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getannouncemets);
    });

module.exports = router;
