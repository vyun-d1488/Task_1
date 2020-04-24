"use strict";
exports.__esModule = true;
var log_1 = require("./../log");
var app_1 = require("./../app");
var PORT = process.env.PORT || 80;
var log = new log_1["default"]().createLogger(module);
log.info("Created Logger");
var server = app_1["default"].listen(PORT, function () {
    log.info("Express server listening on port " + PORT);
});
