import React, {useContext} from "react"
import Button from "./Button"
import { ThemeContext } from "./themeContext"

export default function Main (){

    const {theme} = useContext(ThemeContext)

    return (
        <div className="main">
            <h1>Welcome To Our Theme Changer!</h1>
            <h3>You are currently using {theme} theme!</h3>
            <div className="button">
                <Button />
            </div>
        </div>
    )
}