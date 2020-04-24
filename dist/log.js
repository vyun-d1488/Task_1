"use strict";
exports.__esModule = true;
var winston = require("winston");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.createLogger = function (module) {
        return winston.createLogger({
            transports: [
                new winston.transports.File({
                    level: "info",
                    filename: process.cwd() + "/logs/all.log",
                    handleExceptions: true,
                    format: winston.format.json(),
                    maxFiles: 2
                }),
                new winston.transports.Console({
                    level: "debug",
                    handleExceptions: true,
                    format: winston.format.combine(winston.format.splat(), winston.format.label({ label: this.getFilePath(module) }), winston.format.colorize(), winston.format.printf(function (nfo) {
                        return nfo.level + ": [" + nfo.label + "] " + nfo.message;
                    }))
                }),
            ]
        });
    };
    Logger.prototype.getFilePath = function (module) {
        return module.filename.split("/").slice(-2).join("/");
    };
    return Logger;
}());
exports["default"] = Logger;
