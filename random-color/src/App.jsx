import React from "react"
import './App.css'
import axios from "axios"

function App() {
  const [count, setCount] = React.useState(0)
  const [color, setColor] = React.useState(null)

  


  React.useEffect(() => {
    const url = `https://random-flat-colors.vercel.app/api/random?count=2`;

    axios.get(url)
      .then(response => {
        setColor(response.data.colors[0])
      })
      .catch(error => {
        console.error("Error fetching color:", error);
      });
  }, [count])

  function handleClick(){
    setCount(prevCount => prevCount + 1)
  }

  const style = {
    backgroundColor: color
  }

  return(
    <div className="react-box">
      <h1>DoberDog's Random Color Generator!</h1>
      <div className="code">Color code: {color}</div>
      <div className="colorbox" style={style}></div>
      <label htmlFor="change">Click to change color!</label>
      <button name="color" onClick={handleClick}>Change</button>
    </div>
  )

}

export default App
