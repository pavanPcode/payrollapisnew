// routes/rollcallRoutes.js
const express = require('express');

const router = express.Router();

router.use('/payroll',require('../controllers/payroll'));
router.use('/DashBoard',require('../controllers/payrollDashBoardController'));
router.use('/Process',require('../controllers/payrollProcessController'));


// Export the router to be used in the app1
module.exports = router;
