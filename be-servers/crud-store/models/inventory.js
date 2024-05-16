const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    product: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)