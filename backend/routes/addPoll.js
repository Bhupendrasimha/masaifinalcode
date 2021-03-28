const express = require("express");
const addPollingStation = require("../controllers/addPolling");

const router = express.Router()

router.post("/polling", addPollingStation)

module.exports = router