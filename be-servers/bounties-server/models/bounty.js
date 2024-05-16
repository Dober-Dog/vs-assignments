const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    target: {
        type: String,
        required: true
    },
    bounty: {
        type: String,
        required: true
    },
    living: {
        type: Boolean
    }
})

module.exports = mongoose.model("Bounty", bountySchema)