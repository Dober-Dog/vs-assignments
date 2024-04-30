import { createContext, useEffect, useState } from "react"
import axios from "axios"

const FactContext = createContext()

function FactContextProvider(props){
    const [fact, setFact] = useState("")
    const [pic, setPic] = useState("")

    const newFact = () => {
        axios.get("https://dog-api.kinduff.com/api/facts")
            .then(res => setFact(res.data.facts))
            .catch(err => console.log("Error retrieving data: ", err))
    }

    const newPic = () => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => setPic(res.data.message))
            .catch(err => console.log("Error retrieving picture, ", err))
    }

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => setPic(res.data.message))
            .catch(err => console.log("Error retrieving picture, ", err))
    },[])

    useEffect(() => {
        axios.get("https://dog-api.kinduff.com/api/facts")
            .then(res => setFact(res.data.facts))
            .catch(err => console.log("Error retrieving data: ", err))
    }, [])

    return (
        <FactContext.Provider value={{
            fact: fact,
            newFact: newFact,
            pic: pic,
            newPic: newPic
        }}>
            {props.children}
        </FactContext.Provider>
    )

}

export {FactContext, FactContextProvider}