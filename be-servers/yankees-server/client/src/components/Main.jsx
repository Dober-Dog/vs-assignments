import { useState, useEffect } from "react"
import axios from "axios"
import PlayerForm from './PlayerForm'
import PlayerList from './PlayerList'


function Main() {
    const [players, setPlayers] = useState([])
  
      useEffect(() => {
          axios.get("/roster")
              .then(res => setPlayers(res.data))
              .catch(err => console.log(err))
      }, [])
  
      function addPlayer(newPlayer){
        axios.post("/roster", newPlayer)
          .then(res => setPlayers(prevPlayers => [...prevPlayers, res.data]))
          .catch(err => console.log("Error retrieving data, ", err))
      }
  
      function remove(id){
          axios.delete(`/roster/${id}`)
              .then(setPlayers(prevPlayers => prevPlayers.filter(player => player._id !== id)))
              .catch(err => console.log(err))
      }
  
      function addInfo(updates, id){
          axios.put(`/roster/${id}`, updates)
              .then(res => setPlayers(prevPlayers => prevPlayers.map(player => player._id !== id ? player : res.data)))
              .catch(err => console.log(err))
      }
    return(
      <>
      <PlayerForm 
        btnTxt="Submit Player"
        submit={addPlayer}
      />
      <PlayerList
        players={players}
        remove={remove}
        addInfo={addInfo}
      />
      </>
    )
  }
  
  export default Main;