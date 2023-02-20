const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const errorHandler = require('./error/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001 } = process.env;
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {

});
