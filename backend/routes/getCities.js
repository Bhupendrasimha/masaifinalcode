const express = require("express");
const getCities = require("../controllers/getCities");

const router = express.Router()

router.get("/cities", getCities)

module.exports = router