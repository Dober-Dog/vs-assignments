import React, { useContext } from "react"
import Bounty from "./components/Bounty"
import { BountyContext } from "./components/bountyContext"
import "./App.css"
import BountyForm from "./components/BountyForm"
import axios from "axios"

export default function App(){

  const { bounties, setBounties } = useContext(BountyContext)

  const bountiesList = bounties.map((bounty) => (
    <Bounty 
      key={bounty._id}
      _id={bounty._id} 
      target={bounty.target} 
      bounty={bounty.bounty}
      remove={removeBounty}
      editBounty={editBounty}
    />
  ))

  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log("Error retrieving data, ", err))
  }

  function removeBounty(id){
    axios.delete(`/bounties/${id}`)
      .then(res => {
        alert(res.data)
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== id))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, id){
    axios.put(`/bounties/${id}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== id ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <BountyForm 
        submit={addBounty}
        btnText= "Add Bounty"
      />
      {bountiesList}
    </>
  )

}