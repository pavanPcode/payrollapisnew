const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const config = require('./config');
//const errorHandler = require('./src/middlewares/errorMiddleware');
const logger = require('./src/utils/logger');
const rcRoutes = require('./src/routes/rollcallRoutes');
const mobileRoutes = require('./src/routes/appRoutes');
const payrollRoutes = require('./src/routes/payrollRoutes');
const VisitorRoutes = require('./src/routes/VisitorRoutes');

const swaggerDocs = require("./swagger");

swaggerDocs(app); // Load Swagger documentation..

app.use(express.json());
app.use(cors());
// app.use("/uploads",express.static("uploads"));
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Define a basic route to test that the server is working
app.get('/', (req, res) => {
  res.send('Hello, world!');
});  

app.get('/abc', (req, res) => {
  res.send('Hello, world! abc');
}); 

app.use("/portal",rcRoutes); // Routes related to Rollcall
app.use("/app",mobileRoutes); // Routes related to Rollcall
app.use("/payroll",payrollRoutes); // Routes related to Rollcall
app.use("/Visitor",VisitorRoutes);
// Auth Routes - Will work at the end1
//app.use('/api/auth', authRoutes);

// Middleware for handling unmatched routes
app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error); // Pass 404 to global handler
});
app.get('/error', (req, res, next) => {
  try {
    throw new Error('Simulated error');
  } catch (error) {
    next(error); // Pass error to middleware
  }
});

// Global error handler //
//app.use(errorHandler);

// Start server
const port = process.env.PORT || 8080; 
const host = '0.0.0.0'
app.listen(port ,host,() => {
  logger.info(`running at http://${host}:${port}`);
  console.log(`Swagger docs available at http://${host}:${port}/api-docs`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
