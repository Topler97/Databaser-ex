const { log } = require("console");
const express = require("express");
const mongoose = require(`mongoose`);

const app = express();

app.use(express.json());

const PORT = 3000;
const URL = `127.0.0.1`

app.listen(PORT, URL, () => {
    console.log(`connected to http://${URL}:${PORT}`);
});


