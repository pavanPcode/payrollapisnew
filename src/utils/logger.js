const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: `logs/info.log`, level: 'info' }),
    new transports.File({ filename: `logs/error.log`, level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;






// const fs = require('fs');
// const path = require('path');
// const { createLogger, format, transports } = require('winston');

// // Define absolute path for logs directory
// const logDir = path.join(__dirname, 'logs');

// // Ensure the logs directory exists
// if (!fs.existsSync(logDir)) {
//     fs.mkdirSync(logDir, { recursive: true });
// }

// const logger = createLogger({
//   level: 'info',
//   format: format.combine(
//     format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
//     format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`)
//   ),
//   transports: [
//     new transports.Console(),
//     new transports.File({ filename: path.join(logDir, 'info.log'), level: 'info' }),
//     new transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }),
//     new transports.File({ filename: path.join(logDir, 'combined.log') }),
//   ],
// });

// module.exports = logger;
