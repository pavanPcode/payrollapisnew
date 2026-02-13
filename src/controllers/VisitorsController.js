const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const { Console } = require('winston/lib/winston/transports');

router.post('/UpdatevisitorStatus',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    return DbDataByOperationId(Data,userObj, res, OperationEnums().updatestatusVis);
});

router.post('/deletevisitor',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    return DbDataByOperationId(Data,userObj, res, OperationEnums().deletevisitorzk);
});

router.post('/editvisitor',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    return DbDataByOperationId(Data,userObj, res, OperationEnums().editvisitorzk);
});


router.post('/Addvisitor',validateToken, async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;

    const generatePassCode = () => {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    };

    Data.PassCode = generatePassCode();

    console.log('Data',Data)

    return DbDataByOperationId(Data,userObj, res, OperationEnums().addvisitorzk);
});

// router.post('/deleteAdvancePayments',validateToken, async (req, res, next) => {
//     const Data = req.body;
//     const userObj = req.user;
//     return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteAdvancePayments);
// });
router.get('/getvisitorsList', validateToken, async (req, res, next) => {
    const { SuperId, HostedBy, status, VisitType,StartDate,EndDate } = req.query;

    const requestObj = {
        SuperId: SuperId,
        HostedBy: HostedBy || 0,
        status: status || 0,
        VisitType: VisitType || 0,
        StartDate: StartDate || 0,
        EndDate: EndDate || 0
    };
    console.log('requestObj',requestObj)
    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getvisitors
    );
});





module.exports = router;