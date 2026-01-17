const express = require('express');
const router = express.Router();
const { DbDataByOperationId } = require("../dataAccess/DataRepo");
const { OperationEnums } = require("../utils/RCEnums");
const { validateToken } = require('../middlewares/authMiddleware');
const { utilityhandleResponse } = require('../utils/responseHandler');



router.get('/getDepartmentWiseSalaries', validateToken, async (req, res, next) => {
    const { SuperId, Month,Year  } = req.query;

    if (!SuperId || !Month || !Year) {
        return res.status(400).json({ message: 'SuperId and Month and Year are required' });
    }

    const requestObj = {
        SuperId: SuperId,
        Month: Month,
        Year:Year
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().DepartmentWiseSalaries // You need to add this enum
    );
});


router.get('/getPayrollOverviewCount', validateToken, async (req, res, next) => {
    const { SuperId, Month,Year  } = req.query;

    if (!SuperId || !Month || !Year) {
        return res.status(400).json({ message: 'SuperId and Month and Year are required' });
    }

    const requestObj = {
        SuperId: SuperId,
        Month: Month,
        Year:Year
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getPayrollOverviewCount // You need to add this enum
    );
});


router.get('/getpayrollcounts', validateToken, async (req, res, next) => {
    const { SuperId  } = req.query;

    if (!SuperId ) {
        return res.status(400).json({ message: 'SuperId  are required' });
    }

    const requestObj = {
        SuperId: SuperId
    };

    const userObj = req.user;

    return DbDataByOperationId(
        requestObj,
        userObj,
        res,
        OperationEnums().getpayrollcounts
    );
});


module.exports = router;