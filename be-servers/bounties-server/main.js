const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter.js"))

app.get("/", (req, res) => {
    res.send("Prepare to execute Order 66")
})




app.listen(6000, () => {
    console.log("The server is running on Port 6000")
})