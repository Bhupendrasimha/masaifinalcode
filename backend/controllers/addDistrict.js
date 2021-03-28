const mongoose = require("mongoose");
const District = require("../models/DistrictSchema");
const bcrypt = require("bcrypt");

const registerDistrict = async (req, res) => {
    try {
        const {email, password, city, name, type, population} = req.body;

        const user = await District.findOne({email})

        if(user) {
            return res.status(400).json("Email already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        District.create({
            email,
            type,
            city,
            population,
            name,
            password: hashedPassword
        })
        .then((user) => {
            return res.status(200).json({
                message: "Registered Successfully"
            })
        })
    } catch (err) {
        return res.status(400).json({
            error: true,
            message: "Something went wrong."
        })
    }
}

module.exports = registerDistrict;