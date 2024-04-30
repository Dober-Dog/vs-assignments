const express = require("express")
const showsRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const shows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Watchmen", _id: uuidv4() },
    { title: "Westworld", _id: uuidv4() },
    { title: "Friends", _id: uuidv4() }
]


showsRouter.route("/")
    .get((req, res) => {
        res.send(shows)
    })
    .post((req, res) => {
        const newShow = req.body
        newShow._id = uuidv4()
        shows.push(newShow)
        res.send(`Successfully added ${newShow.title} to the database!`)
    })


showsRouter.get("/:showId", (req, res) => {
    const showId = req.params.showId
    const foundShow = shows.find(show => show._id === showId)
    res.send(foundShow)
})


module.exports = showsRouter