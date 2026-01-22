const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/addRegExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().addRegExpenses);
});

router.post('/deleteRegExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().deleteRegExpenses);
});

router.post('/ApproveRegExpenses',validateToken,upload.none(), async (req, res, next) => {
    const Data = req.body;
    const userObj = req.user;
    console.log('Data',Data)
    return DbDataByOperationId(Data,userObj, res, OperationEnums().ApproveRegExpenses);
});

router.get('/getRegExpenses', validateToken, async (req, res, next) => {
    const { SuperId,RegId,BranchId,PayPeriodId } = req.query;

    if (!SuperId || !RegId) {
        return res.status(400).json({ message: 'SuperId and RegId and BranchId and PayPeriodId are required' });
    }
    const requestObj = {SuperId:SuperId,
        RegId:RegId || 0,
        BranchId:BranchId  || 0,
        PayPeriodId:PayPeriodId || 0
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getRegExpensespr
    );
});



module.exports = router;