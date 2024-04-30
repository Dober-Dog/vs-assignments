const express = require("express")
const app = express()

app.use(express.json())

app.use("/inventory", require("./routes/thingsRouter.js"))

app.get("/", (req, res) => res.send("Hello there!"))


app.listen(7000, () => {
    console.log("Server running on port 7000")
})