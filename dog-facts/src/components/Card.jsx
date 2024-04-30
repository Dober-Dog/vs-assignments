import React from "react"
import { FactContext } from "./FactContext"

export default function Card(){
    
    const {fact} = React.useContext(FactContext)

    return (
        <div className="info">
            <h2>{fact}</h2>
        </div>
    )
}