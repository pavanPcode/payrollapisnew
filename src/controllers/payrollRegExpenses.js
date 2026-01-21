const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



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