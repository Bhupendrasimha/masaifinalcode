const District = require("../models/DistrictSchema");
const bcrypt = require("bcrypt");

const loginDistrict = async (req, res) => {
    try {
        let {email, password} = req.body;
        console.log(req.body)

        const user = await District.findOne({email})

        if(!user) {
            res.status(400).json({
                error: true,
                message: "Sorry we can't fin this account. Please register."
            })
            return;
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(checkPassword) {
            return res.status(200).json({
                user
            })
        }
        else {
            res.status(400).json({
                error: true,
                message: "Incorrect password, please try again."
            });
            return;
        }
    } catch (err) {
        res.status(400).json({
            error: true,
            message: "Something went wrong."
        })
    }
}

module.exports = loginDistrict;