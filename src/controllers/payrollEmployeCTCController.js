const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getctcreport', validateToken, async (req, res, next) => {
    const { EmployeeId,SuperId } = req.query;

    const requestObj = {
        EmployeeId: EmployeeId || 0,
        SuperId: SuperId || 0
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().ctcGet
    );
});



module.exports = router;