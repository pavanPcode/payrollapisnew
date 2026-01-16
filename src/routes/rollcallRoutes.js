// routes/rollcallRoutes.js
const express = require('express');

const router = express.Router();

router.use('/attendance',require('../controllers/AttendanceController'));
router.use('/user',require('../controllers/userController'));
router.use('/leave',require('../controllers/leavesController'));
router.use('/emp',require('../controllers/empController'));
router.use('/holidays',require('../controllers/holidaysController'));
router.use('/team',require('../controllers/TeamController'));
router.use('/visiting',require('../controllers/visitingController'));
router.use('/notification',require('../controllers/notificationController'));
router.use('/projects',require('../controllers/ProjectsController'));
router.use('/department',require('../controllers/DepartmentController'));
router.use('/branch',require('../controllers/branchController'));
router.use('/shifts',require('../controllers/ShiftsController'));
router.use('/termination',require('../controllers/terminationController'));
router.use('/access',require('../controllers/accessController'));
router.use('/reports',require('../controllers/reportsController'));
router.use('/dashboard',require('../controllers/dashboardController'));
//router.use('/bom',require('../controllers/bomproduct'));
router.use('/education',require('../controllers/Education'));
router.use('/fileupload',require('../controllers/fileupload'));
router.use('/Mails',require('../controllers/Mails'));
router.use('/payroll',require('../controllers/payroll'));






// Export the router to be used in the app1
module.exports = router;
