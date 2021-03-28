const express = require("express");
const Joi = require("joi");

const registerDistrict = require("../controllers/addDistrict");
const router = express.Router();

router.post("/register", registerDistrict);

module.exports = router