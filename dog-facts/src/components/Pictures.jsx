import React from "react"
import Pic from "./Pic"
import { FactContext } from "./FactContext"

export default function Pictures (){

    const {newPic} = React.useContext(FactContext)

    return (
        <div className="pictures">
            <h1>Here are some pictures of Dogs!</h1>
            <h2>Don't you just love them?</h2>
            <Pic />
            <button onClick={newPic} className="get-new">Fetch A New Pic</button>
        </div>
    )

}