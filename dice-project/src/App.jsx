import React from "react"
import DiceBox from "./DiceBox"
import './App.css'

function App() {
  const[dice, setDice] = React.useState([0, 0, 0, 0, 0, 0])

  function reroll(){
    const newDice = []
    for (let i = 0; i < 6; i++){
      newDice.push(Math.floor(Math.random() * 5) + 1)
    }
    setDice(newDice)
  }

  return (
    <div>
      <DiceBox 
        dice1={dice[0]}
        dice2={dice[1]}
        dice3={dice[2]}
        dice4={dice[3]}
        dice5={dice[4]}
        dice6={dice[5]}
        handleNew={reroll}
      />
    </div>
  )

}

export default App
