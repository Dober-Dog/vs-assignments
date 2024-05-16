const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")
const inventory = require("../models/inventory.js")

inventoryRouter.route("/")
    .get(async (req, res, next) => {
        try {
            const result = await Inventory.find({})
            res.status(200).send(result)
        } catch (err) {
            res.status(404)
            return next(err)
        }
    })
    .post(async (req, res, next) => {
        try {
            const newItem = new Inventory(req.body)
            await newItem.save()
            res.status(201).send(newItem)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

inventoryRouter.route("/:inventoryId")
    .delete(async(req, res, next) => {
        try {
            const target = await Inventory.findByIdAndDelete({ _id: req.params.inventoryId })
            res.status(200).send(`The product ${target.product} was removed from the store`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .put(async (req, res, next) => {
        try {
            const update = req.body
            const result = await Inventory.findOneAndUpdate({ _id: req.params.inventoryId }, update, {
                new: true
            })
            res.status(201).send(result)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .get(async (req, res, next) => {
        try {
            const result = await Inventory.find({ _id: req.params.inventoryId })
            res.status(200).send(result)
        } catch (err) {
            res.status(404)
            return next(err)
        }
    })


inventoryRouter.get("/search/category", async (req, res, next) => {
    try {
        const target = req.query.category
        const result = await Inventory.find({ category: target })
        if (result.length === 0) {
            res.status(404)
            res.send(`errMsg: Could not find category ${target}`)
        } else {
            res.status(200).send(result)
        }
    } catch (err) {
        res.status(404)
        return next(err)
    }
})



module.exports = inventoryRouter