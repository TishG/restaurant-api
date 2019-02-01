const express = require("express");
const app = express();

module.exports = app;

const routeConfig = require("./config/route-config");
const appConfig = require("./config/main-config");
appConfig.init(app, express);
routeConfig.init(app);
