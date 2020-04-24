"use strict";
exports.__esModule = true;
var express = require("express");
var mainBranch_1 = require("./routes/mainBranch");
var app = express();
app.use("/", mainBranch_1["default"]);
exports["default"] = app;
