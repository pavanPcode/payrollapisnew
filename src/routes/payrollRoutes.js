// routes/rollcallRoutes.js
const express = require('express');

const router = express.Router();

router.use('/payroll',require('../controllers/payroll'));
router.use('/DashBoard',require('../controllers/payrollDashBoardController'));
router.use('/Process',require('../controllers/payrollProcessController'));
router.use('/AdvancePayments',require('../controllers/payrollAdvancePaymentsController'));
router.use('/EmployeCTC',require('../controllers/payrollEmployeCTCController'));
router.use('/RegExpenses',require('../controllers/payrollRegExpenses'));
router.use('/payslips',require('../controllers/payrollpayslips'));
router.use('/Reports',require('../controllers/payrollreportsController'));

/// Export the router to be used in the app1..
module.exports = router;
