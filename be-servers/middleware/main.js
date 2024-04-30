const express = require("express")
const app = express()
const middleware = require("./middleware")

app.use(express.json())

app.use((req, res, next) => {
    req.body = "Hello there"
    next()
})

app.use(middleware)

app.get("/", (req, res) => {
    res.send(req.body)
})



app.listen(8000, () => {
    console.log("Server is listening on Port 8000")
})