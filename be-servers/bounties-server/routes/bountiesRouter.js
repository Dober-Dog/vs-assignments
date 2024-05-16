const express = require("express")
const bountiesRouter = express.Router()
const Bounty = require("../models/bounty.js")


bountiesRouter.route("/")
    .get(async (req, res, next) => {
        try {
            const result = await Bounty.find({})
            res.status(200).send(result)
        } catch (err){
            res.status(500)
            return next(err)
        }
    })
    .post(async (req, res, next) => {
        try {
            const newBounty = new Bounty(req.body)
            await newBounty.save()
            res.status(201).send(newBounty)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    
bountiesRouter.delete("/:bountyId", async (req, res, next) => {
    try {
        const result = await Bounty.findByIdAndDelete({ _id: req.params.bountyId })
        res.status(200).send(`Successfully deleted ${result.target} from the list`)
    } catch (err){
        res.status(500)
        return next(err)
    }
})

bountiesRouter.put("/:bountyId", async (req, res, next) => {
    try {
        const update = req.body
        const result = await Bounty.findOneAndUpdate({ _id: req.params.bountyId }, update, {
            new: true
        })
        res.status(201).send(result)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

bountiesRouter.get("/:bountyId", async (req, res, next) => {
    try {
        const target = await Bounty.find({ _id: req.params.bountyId })
        res.status(200).send(target)
    } catch (err) {
        res.status(404)
        return next(err)
    }
})



module.exports = bountiesRouter