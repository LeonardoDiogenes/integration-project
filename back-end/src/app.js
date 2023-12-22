const express = require('express');
const { userRoute } = require('./routes');

const app = express();
app.use(express.json());

app.use('/user', userRoute);

module.exports = app;