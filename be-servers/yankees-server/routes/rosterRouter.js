const express = require("express")
const rosterRouter = express.Router()
const Player = require("../models/player.js")

rosterRouter.route("/")
    .get(async (req, res, next) => {
        try {
            const result = await Player.find()
            res.status(200).send(result)
        } catch (err) {
            res.status(404)
            return next(err)
        }
    })
    .post(async (req, res, next) => {
        try {
            const newPlayer = new Player(req.body)
            await newPlayer.save()
            res.status(201).send(newPlayer)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })


rosterRouter.route("/:playerId")
    .delete(async (req, res, next) => {
        try {
            const target = req.params.playerId
            const removePlayer = await Player.findByIdAndDelete({ _id: target })
            res.status(200).send(`Removed ${removePlayer.name} from the roster`)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })
    .get(async (req, res, next) => {
        try {
            const id = req.params.playerId
            const result = await Player.find({ _id: id })
            res.status(200).send(result)
        } catch (err) {
            res.status(404)
            return next(err)
        }
    })
    .put(async (req, res, next) => {
        try {
            const changes = req.body
            const result = await Player.findByIdAndUpdate({ _id: req.params.playerId }, changes, {
                new: true
            })
            res.status(201).send(result)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })



rosterRouter.get("/search/position", async (req, res, next) => {
    try {
        const target = await Player.find({ position: req.query.position })
        res.status(200).send(target)
    } catch (err) {
        res.status(404)
        return next(err)
    }
})


module.exports = rosterRouter