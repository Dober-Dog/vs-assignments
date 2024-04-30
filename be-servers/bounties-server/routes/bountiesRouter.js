const express = require("express")
const bountiesRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const bounties = [
    { target: "Darth Revan", bounty: "1,000,000", _id: uuidv4(), living: true},
    { target: "Jedi Master Meetra Surik", bounty: "750,000", _id: uuidv4(), living: true},
    { target: "Sith Emperor Vitiate", bounty: "2,000,000",_id: uuidv4(), living: true},
    { target: "Jedi Knight Bastila Shan", bounty: "500,000",_id: uuidv4(), living: true},
    { target: "Sith Lord Darth Malak", bounty: "800,000",_id: uuidv4(), living: true},
    { target: "Jedi Master Nomi Sunrider", bounty: "600,000",_id: uuidv4(), living: true},
    { target: "Sith Lord Darth Malgus", bounty: "900,000",_id: uuidv4(), living: true},
    { target: "Jedi Master Satele Shan", bounty: "700,000",_id: uuidv4(), living: true},
    { target: "Sith Lord Exar Kun", bounty: "1,200,000",_id: uuidv4(), living: true},
    { target: "Jedi Council Member Odan-Urr", bounty: "400,000",_id: uuidv4(), living: true}
]

bountiesRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })
    
bountiesRouter.delete("/:bountyId", (req, res) => {
    const findId = req.params.bountyId
    const completedBounty = bounties.findIndex(bounty => bounty._id === findId)
    bounties.splice(completedBounty, 1)
    res.send("Kill confirmed.")
})

bountiesRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})



module.exports = bountiesRouter