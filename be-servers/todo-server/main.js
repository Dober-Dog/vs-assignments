const express = require("express")
const app = express()



app.use(express.json())

app.use("/todo", require("./routes/todoRouter"))

app.get("/", (req, res) => {
    res.send("Welcome to the Todo Router!")
})

app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})