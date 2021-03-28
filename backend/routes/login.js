const express = require("express");
const loginDistrict = require("../controllers/loginDistrict");

const router = express.Router()

router.post("/login", loginDistrict);

module.exports = router