const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())

app.use(morgan('dev'))

mongoose.connect("mongodb+srv://Logan1135:Bad_W0lf@cluster0.axhouma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

app.use("/roster", require("./routes/rosterRouter.js"))

app.get("/", (req, res, next) => {
    res.status(200).send("Welcome to the Yankees Roster App!")
})



app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})