require("dotenv").config();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");

module.exports = {
  init(app){
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
  }
};