const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const movieRouter = require('./movies');
const userRouter = require('./users');
const reviewRouter = require('./reviews');

app.use('/', movieRouter);
app.use('/', reviewRouter);
app.use('/', userRouter);

const PORT = 1337
const URL = '127.0.0.1'

mongoose.connect('')

app.listen(PORT, URL, () => {
    console.log(`listen to ${URL}:${PORT}`)
})