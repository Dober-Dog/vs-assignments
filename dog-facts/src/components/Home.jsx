import Card from "./Card"
import { FactContext } from "./FactContext"
import { useContext } from "react"

export default function Home (){

    const {newFact} = useContext(FactContext)

    return(
        <div className="home">
            <h1>Welcome to Random Dog Facts!</h1>
            <h2>We love dogs, and looks like you do too! So here's something you may not have known before!</h2>
            <h3>Did you know...</h3>
            <Card />
            <button onClick={newFact} className="get-new">Fetch A New Fact!</button>
        </div>
    )
}