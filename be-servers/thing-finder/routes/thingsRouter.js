const express = require("express")
const thingsRouter = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


thingsRouter.route("/")
    .get((req, res) => {
        res.send(inventoryItems)
    })
    

thingsRouter.get("/search/category", (req, res) => {
    const category = req.query.type
    const foundList = inventoryItems.filter(item => item.type === category)
    res.send(foundList)
})




module.exports = thingsRouter