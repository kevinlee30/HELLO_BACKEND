"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var http = require("http");
var index_1 = require("./environment/index");
var app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
setImmediate(startServer);
// APIs
app.get('/index', function (req, res) {
    console.log("req: ", req);
    return res.status(200).json({ message: "success !" });
});
app.post('/create', function (req, res) {
    console.log("req: ", req);
    return res.status(200).json({ message: "success !" });
});
app["delete"]('/remove', function (req, res) {
    console.log("req: ", req);
    return res.status(200).json({ message: "success !" });
});
app.put('/update', function (req, res) {
    console.log("req: ", req);
    return res.status(200).json({ message: "success !" });
});
var server = http.createServer(app);
//server initialization
function startServer() {
    server.listen(index_1["default"].port, parseInt(index_1["default"].host), function () {
        console.log("Express server istening on %d, in %s mode %s", index_1["default"].port, index_1["default"].host, index_1["default"].env);
    });
}
