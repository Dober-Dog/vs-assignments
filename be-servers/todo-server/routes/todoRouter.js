const { v4: uuidv4 } = require("uuid")
const express = require("express")
const todoRouter = express.Router()


const todoList = [
    {
        name: "First Todo",
        description: "This is the first thing you have to do",
        imgUrl: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Two-Do",
        description: "*beeping and chirping noises similar to R2-D2*",
        imgUrl: "https://qph.cf2.quoracdn.net/main-qimg-813acc5ad499ceb77b98638e55f6ddfb-lq",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Todo III, Ruler of Thesnia",
        description: "Conqueror of Worlds, Slayer of Dragons, and Awkward Wheeler of Dates",
        imgUrl: "https://img.freepik.com/premium-photo/epic-conquest-lich-king-arthas-majestic-8k-art-showcase-amidst-breathtaking-canyon-b_983420-101825.jpg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "To do, or not to do",
        description: "That is the question",
        imgUrl: "https://www.elephango.com/images/RCLG/will-shakespeare-13330.jpg",
        completed: false,
        _id: uuidv4()
    }
]


todoRouter.route("/")
    .get((req, res) => {
        res.send(todoList)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todoList.push(newTodo)
        res.send(`Added ${newTodo.title} to list`)
    })


todoRouter.route("/:Id")
    .put((req, res) => {
        const target = req.params.Id
        const updateObject = req.body
        const todo = todoList.findIndex(item => item._id === target)
        const updatedTodo = Object.assign(todoList[todo], updateObject)
        res.send(updatedTodo)
    })
    .delete((req, res) => {
        const target = req.params.Id
        const todo = todoList.findIndex(item => item._id === target)
        todoList.splice(todo, 1)
        res.send("Todo removed successfully")
    })


module.exports = todoRouter