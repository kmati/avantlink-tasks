"use strict";
const express = require('express');
const app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

require('./tasks')(app);

const port = 4001;
app.listen(Number(port), function () {
  console.log(`The task-server app is listening on port ${port}`);
});