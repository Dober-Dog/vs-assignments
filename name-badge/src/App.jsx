import React from "react"
import Badge from "./Badge"
import './App.css'

function App() {
  const [persons, setPersons] = React.useState([{
    firstName: "",
    lastName: "",
    phone: "",
    birthplace: "",
    favFood: "",
    email: "",
    info: "",
    submitted: false
  }])

  function handleChange(event, index) {
    const { name, value } = event.target
    setPersons(prevPersons => {
      const updatedPersons = [...prevPersons]
      updatedPersons[index] = {
        ...updatedPersons[index],
        [name]: value
      }
      return updatedPersons;
    })
  }

  const badges = persons.map((person, index) => (
    person.submitted && (
      <Badge 
        key={index}
        firstName={person.firstName}
        lastName={person.lastName}
        phone={person.phone}
        birthplace={person.birthplace}
        favFood={person.favFood}
        email={person.email}
        info={person.info}
      />
    )
  ))

  function handleSubmit(event) {
    event.preventDefault()
    if (isNaN(persons[0].phone)) {
      alert("Phone Syntax Error");
    } else if (persons[0].info.length < 3 && persons[0].info.length > 0){
      alert("Please provide more information")
    } else {
      persons[0].submitted = true
      setPersons(prevPersons => [
        {
          firstName: "",
          lastName: "",
          phone: "",
          birthplace: "",
          favFood: "",
          email: "",
          info: "",
          submitted: false
        },
        ...prevPersons
      ])
    }
  }

  return (
    <div className="react-box" id="react-box">
      <div className="info--box">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-boxes">
            <input
              required
              name="firstName"
              type="text"
              placeholder="First Name"
              value={persons[0].firstName}
              onChange={(event) => handleChange(event, 0)}
            />
            <input
              required
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={persons[0].lastName}
              onChange={(event) => handleChange(event, 0)}
            />
            <input
              required
              name="email"
              type="text"
              placeholder="Email"
              value={persons[0].email}
              onChange={(event) => handleChange(event, 0)}
            />
            <input
              name="birthplace"
              type="text"
              placeholder="Place of birth"
              value={persons[0].birthplace}
              onChange={(event) => handleChange(event, 0)}
            />
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone"
              value={persons[0].phone}
              onChange={(event) => handleChange(event, 0)}
            />
            <input 
              name="favFood"
              type="text"
              placeholder="Favorite Food"
              value={persons[0].favFood}
              onChange={(event) => handleChange(event, 0)}
              minLength={3}
            />
            <textarea className="description"
              name="info"
              type="text"
              placeholder="Tell us about yourself"
              value={persons[0].info}
              onChange={(event) => handleChange(event, 0)}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {badges}
    </div>
  )
}

export default App
