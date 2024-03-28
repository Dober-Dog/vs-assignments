import React from "react"
import './App.css'
import Square from "./components/Square"

function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])
  
  const boxes = []

  function smallTime(){
    setColors(prevColors => {
      return prevColors.map(color => {
        return prevColors[0] === "white" ? "black" : "white"
      })
    })
  }

  function partyTime(){
    setColors(prevColors =>{
      return ["purple", "purple", prevColors[2], prevColors[3]]
    })
  }

  function leftBlue(){
    setColors(prevColors => [prevColors[0], prevColors[1], "blue", prevColors[3]])
  }

  function rightBlue(){
    setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], "blue"])
  }

  for(let i = 0; i < colors.length; i++){
    boxes.push(<Square color={colors[i]} key={i} id={i}  />)
  }


  return (
    <div>
        <div className="box-container">
          {boxes}
        </div>
        <div className="buttons">
          <button onClick={smallTime}>Small Time</button>
          <button onClick={partyTime}>Party Time</button>
          <button onClick={leftBlue}>Left Blue</button>
          <button onClick={rightBlue}>Right Blue</button>
        </div>
    </div>
  )

}

export default App
