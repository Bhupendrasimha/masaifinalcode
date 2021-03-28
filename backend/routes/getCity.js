const express = require("express");
const getCity = require("../controllers/getCity");

const router = express.Router()

router.post("/city", getCity)

module.exports = router