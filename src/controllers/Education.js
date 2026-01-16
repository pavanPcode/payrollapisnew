const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');




// Route for inserting data into the RegEducation table
router.post('/createRegeducationdetails', validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data, userObj, res, OperationEnums().createeducation);
});




// Route for updating data in the RegEducation table
router.post('/updateRegeducationdetails', validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    return DbDataByOperationId(Data, userObj, res, OperationEnums().updateeducation);
});




// Route for fetching education details based on RegId and SuperId
router.get('/getRegeducationdetails', validateToken, async (req, res, next) => {
    const Data = req.query;
    const userObj = req.user;
    return DbDataByOperationId(Data, userObj, res, OperationEnums().geteducationbyregid);
});












module.exports = router;