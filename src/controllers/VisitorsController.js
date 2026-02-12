const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



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
    const { SuperId, HostedBy, status, VisitType, StartDate, EndDate } = req.query;

    const requestObj = {
        SuperId: SuperId,
        HostedBy: HostedBy || 0,
        status: status || 0,
        VisitType: VisitType || 0,
        StartDate: StartDate || null,
        EndDate: EndDate || null
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getvisitors
    );
});


// router.get('/getAdvancePaymentsHistory', validateToken, async (req, res, next) => {
//     const { AdvancePaymentId } = req.query;

//     const requestObj = {
//         AdvancePaymentId: AdvancePaymentId 
//     };

//     const userObj = req.user;
//     console.log('requestObj',requestObj)
//     return DbDataByOperationId(
//         requestObj,
//         userObj,
//         res,
//         OperationEnums().getAdvancePaymentsHistory
//     );
// });




module.exports = router;