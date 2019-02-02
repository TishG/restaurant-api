const express = require("express");
const router = express.Router();
const resultsController = require("../controllers/resultsController")

router.get("/results", resultsController.results);
module.exports = router;