"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var configData = {
    env: process.env.NODE_ENV || "dev",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || "3000",
    mongo_uri: process.env.MONGO_URI || "mongodb://localhost/my_database",
    secret_key: process.env.SECRET_KEY || "kevin12"
};
exports["default"] = configData;
