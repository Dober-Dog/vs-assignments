import React from "react"
import { FactContext } from "./FactContext"

export default function Pic (){

    const {pic} = React.useContext(FactContext)

    const styles = {
        height: "400px",
        marginBottom: "100px"
    }

    return (
        <>
            <img src={pic} style={styles}/>
        </>
    )

}