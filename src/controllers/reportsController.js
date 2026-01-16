const express = require('express');
const router = express.Router();
const { DbDataByOperationId ,DbDataByOperationId_no_Res,DbDataByOperationId_header} = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');

router.get('/getReports',validateToken, async (req, res, next) => {
    console.log("Query Params:", req.query); // Debugging

    const superid = req.query.superid;
    console.log(superid)
    const reportiid = req.query.reportiid;
    let StartDate = req.query.StartDate || '';
    let EndDate = req.query.EndDate || '';
    const RegId = req.query.RegId ? parseInt(req.query.RegId) : 'null';
    const DeptId = req.query.DeptId ? parseInt(req.query.DeptId) : 'null';
    const AttendanceStatus = req.query.AttendanceStatus ? parseInt(req.query.AttendanceStatus) : 'null';
    const ShiftId = req.query.ShiftId ? parseInt(req.query.ShiftId) : 'null';
    const BranchId = req.query.BranchId ? parseInt(req.query.BranchId) : 'null';

    if (!superid || superid.trim() === '') {
        return utilityhandleResponse(res, false, 'required superid parameter' , 400);}
    if (!reportiid || reportiid.trim() === '') {
        return utilityhandleResponse(res, false, 'required reportiid parameter'  , 400);}
    
    StartDate = StartDate === '' ? 'null' : `'${StartDate}'`;
    // EndDate = EndDate === '' ? 'null' : `'${EndDate}'`;

    if (EndDate) {
        if (reportiid === '2') {
            const endDateObj = new Date(EndDate);
            endDateObj.setDate(endDateObj.getDate() + 1);
            EndDate = `'${endDateObj.toISOString().split('T')[0]}'`; // format as 'YYYY-MM-DD'
        } else {
            EndDate = EndDate === '' ? 'null' : `'${EndDate}'`;
        }
    } else {
        EndDate = EndDate === '' ? 'null' : `'${EndDate}'`;
    }





    const requestObj = {
        superid: superid,
        reportiid: reportiid,
        StartDate: StartDate,
        EndDate: EndDate,
        RegId: RegId,
        DeptId: DeptId,
        AttendanceStatus: AttendanceStatus,
        ShiftId: ShiftId,
        BranchId: BranchId
    };

    console.log(requestObj)

    const userObj = req.user;
    // return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getReports);
    // const result = await DbDataByOperationId(requestObj, userObj, res, OperationEnums().getReports);

    // console.log("DB Response:", result);  // ✅ Debugging output
    // return result aa ss

    // lastResult = await DbDataByOperationId_no_Res(requestObj, userObj, OperationEnums().getReports);
    lastResult = await DbDataByOperationId_header(requestObj, userObj, OperationEnums().getReports);
    // console.log('lastResult',lastResult)
    return res.status(200).json(lastResult);

});



router.get('/getreporthead',validateToken, async (req, res, next) => {
    const reportiid = req.query.reportiid;
    if (!reportiid || reportiid.trim() === '') {
        return utilityhandleResponse(res, false, 'required reportiid parameter'  , 400);}

    const requestObj = {
        reportiid: reportiid,
    };
    const userObj = req.user;
    return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getreporthead);
});

module.exports = router;




// router.get('/getReports',validateToken, async (req, res, next) => {
//     console.log("Query Params:", req.query); // Debugging

//     const superid = req.query.superid;
//     console.log(superid)
//     const reportiid = req.query.reportiid;
//     let StartDate = req.query.StartDate || 'null';
//     let EndDate = req.query.EndDate || 'null';
//     const RegId = req.query.RegId ? parseInt(req.query.RegId) : 'null';
//     const DeptId = req.query.DeptId ? parseInt(req.query.DeptId) : 'null';
//     const AttendanceStatus = req.query.AttendanceStatus ? parseInt(req.query.AttendanceStatus) : 'null';
//     const ShiftId = req.query.ShiftId ? parseInt(req.query.ShiftId) : 'null';
//     const BranchId = req.query.BranchId ? parseInt(req.query.BranchId) : 'null';

//     if (!superid || superid.trim() === '') {
//         return utilityhandleResponse(res, false, 'required superid parameter' , 400);}
//     if (!reportiid || reportiid.trim() === '') {
//         return utilityhandleResponse(res, false, 'required reportiid parameter'  , 400);}
    
//     StartDate = StartDate === '' ? 'null' : `'${StartDate}'`;
//     EndDate = EndDate === '' ? 'null' : `'${EndDate}'`;

//     const requestObj = {
//         superid: superid,
//         reportiid: reportiid,
//         StartDate: StartDate,
//         EndDate: EndDate,
//         RegId: RegId,
//         DeptId: DeptId,
//         AttendanceStatus: AttendanceStatus,
//         ShiftId: ShiftId,
//         BranchId: BranchId
//     };

//     console.log(requestObj)

//     const userObj = req.user;
//     return DbDataByOperationId(requestObj, userObj, res, OperationEnums().getReports);
// });




