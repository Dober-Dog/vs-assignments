import React, {useContext} from "react"
import { ThemeContext } from "./themeContext"

export default function Button(){

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`${theme}-theme`}>
            <button onClick={toggleTheme} className={`${theme}-button`}>Click to change!</button>
        </div>
    )

}