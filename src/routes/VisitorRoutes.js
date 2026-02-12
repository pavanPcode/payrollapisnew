// routes/rollcallRoutes.js
const express = require('express');

const router = express.Router();

router.use('/Pass',require('../controllers/VisitorsController'));


/// Export the router to be used in the app1..
module.exports = router;
