const mongoose = require("mongoose")
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    battingAvg: Number,
    era: Number 
})


module.exports = mongoose.model("Player", playerSchema)