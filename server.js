"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const api = require("./api");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("./client"));
app.use('/desktop', express.static('desktop'));
 api.init(app);

app.listen(process.env.PORT, () =>
  console.log(
    `Server running on node version ${process.version} and port ${
      process.env.PORT
    }`
  )
);