const District = require("../models/DistrictSchema");

const getDistrict = async (req, res) => {
    const {id} = req.body;

    await District.find({_id: id})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({
        error: true,
        message: "Something went wrong"
    }))
}

module.exports = getDistrict;