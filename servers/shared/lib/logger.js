const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, colorize } = format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const logger = createLogger({
  format: combine(
    label({ label: 'Web Service Logger' }),
    timestamp(),
    colorize(),
    myFormat
  ),
  transports: [new transports.Console()]
});

module.exports = logger;