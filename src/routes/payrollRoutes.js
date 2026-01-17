// routes/rollcallRoutes.js
const express = require('express');

const router = express.Router();

router.use('/payroll',require('../controllers/payroll'));
router.use('/DashBoard',require('../controllers/prDashBoardController'));


// Export the router to be used in the app1
module.exports = router;
