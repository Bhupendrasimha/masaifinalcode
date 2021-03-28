const District = require("../models/DistrictSchema");

const getCity = async (req, res) => {
    const {cityName} = req.body;
    console.log(cityName)

    await District.find({city: cityName})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({
        error: true,
        message: "Something went wrong"
    }))
}

module.exports = getCity;