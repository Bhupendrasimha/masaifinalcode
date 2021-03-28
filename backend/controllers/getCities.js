const District = require("../models/DistrictSchema");

const getCities = (req, res) => {
    District.find()
    .then((districts) => res.json(districts))
    .catch((err) => res.status(400).json("Error:", err))
}

module.exports = getCities;