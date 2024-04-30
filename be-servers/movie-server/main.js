const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())

app.use(morgan('dev'))

mongoose.connect("mongodb+srv://Logan1135:Bad_W0lf@cluster0.axhouma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use("/movies", require("./routes/movieRouter.js"))

app.use("/shows", require("./routes/showsRouter.js"))

app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})