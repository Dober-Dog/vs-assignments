import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import History from "./components/History"
import Staff from "./components/Staff"


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/History' element={<History />} />
        <Route path='/Staff' element={<Staff />} />
      </Routes>
    </Router>
  )
}

export default App