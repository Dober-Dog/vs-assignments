import React, {useContext} from "react"
import { ThemeContext } from "./themeContext"

export default function Header(){

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`${theme}-theme`}>
            <nav className="nav">
                <span>Home</span>
                <span>About</span>
                <span>Contact Us</span>
            </nav>
        </div>
    )
}