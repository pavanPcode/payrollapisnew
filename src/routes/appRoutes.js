const express = require('express');
const router = express.Router();

router.use('/attendance',require('../controllers/AttendanceController'));
// Export the router to be used in the app
module.exports = router;
