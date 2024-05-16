const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Logan1135:Bad_W0lf@cluster0.axhouma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

app.use(express.json())

app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter.js"))

app.get("/", (req, res) => {
    res.send("Prepare to execute Order 66")
})

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(6000, () => {
    console.log("The server is running on Port 6000")
})