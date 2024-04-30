import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from "./components/About"
import Home from "./components/Home"
import Pictures from './components/Pictures'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pictures" element={<Pictures />} />
      </Routes>
    </Router>
  )
}

export default App
