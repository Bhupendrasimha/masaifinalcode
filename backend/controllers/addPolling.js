const mongoose = require("mongoose");
const District = require("../models/DistrictSchema");

const addPollingStation = async (req, res) => {
    try {
        const {name, address, pincode, id} = req.body;
        
        const newStation = {
            name,
            address,
            pincode
        }

        const district = await District.findByIdAndUpdate(
            id,
            { $addToSet: {pollingStations: newStation } },
            {useFindAndModify: false, returnOriginal: false} 
        )

        return res.status(200).json({district});
        }
    catch (err) {
        res.status(400).json({
            error: true,
            message: "Something went wrong"
        })
    }

}

module.exports = addPollingStation