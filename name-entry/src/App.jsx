import React from "react"
import './App.css'

function App() {
  const [nameList, setNameList] = React.useState({
    names: [],
    input: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setNameList(prevList => ({
      ...prevList,
      [name]: value,
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    setNameList(prevList => ({
      names: [...prevList.names, prevList.input],
      input: ""
    }))
  }

  console.log(nameList.names)

  return (
    <div className="app">
      <h1>{nameList.names[nameList.names.length - 1]}</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          value={nameList.input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
