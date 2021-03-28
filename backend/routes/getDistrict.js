const express = require("express");
const getDistrict = require("../controllers/getDistrict");

const router = express.Router()

router.post("/district", getDistrict)

module.exports = router