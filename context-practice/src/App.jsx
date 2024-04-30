import './App.css'
import Header from "./components/Header"
import React, {useContext} from "react"
import { ThemeContext } from "./components/themeContext"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme}-theme`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
