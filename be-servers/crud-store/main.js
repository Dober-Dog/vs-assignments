const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Logan1135:Bad_W0lf@cluster0.axhouma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => console.log(err))

app.use(express.json())

app.use(morgan('dev'))

app.use("/inventory", require("./routes/inventoryRouter"))

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Crud Store!")
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log("The server is listening on port 7000")
})