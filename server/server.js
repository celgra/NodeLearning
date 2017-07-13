"use strict";

var express = require('express');
var ServerApp = (function () {
    function ServerApp() {
        this.app = express();
    }
    ServerApp.prototype.setRoutes = function () {
        this.app.get('/', this.renderHelloWorld);
    };
    ServerApp.prototype.startServer = function () {
        this.app.listen(5000, function () { return console.log("Example app listening on port 5000!"); });
    };
    ServerApp.prototype.renderHelloWorld = function (req, res) {
        res.send("Hello World!");
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;
