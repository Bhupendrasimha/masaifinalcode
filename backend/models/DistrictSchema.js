const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    population: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    pollingStations: {
        type: Array
    }
}, {
    versionKey: false
})

module.exports = mongoose.model("Districts", districtSchema);