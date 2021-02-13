const express = require('express');
const addRequestId = require('express-request-id')()
const requestLogger = require('../shared/lib/requestLogger')

const app = express();

app.set('x-powered-by', false);

app.use(express.json());

app.use(addRequestId)

app.use(requestLogger)

app.use(require('./router'));

module.exports = app;
