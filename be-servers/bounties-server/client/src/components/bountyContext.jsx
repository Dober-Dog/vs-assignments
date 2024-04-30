import { useState, createContext, useEffect } from "react"
import axios from "axios"

const BountyContext = createContext()

function BountyContextProvider(props){
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <BountyContext.Provider value={{
            bounties,
            setBounties
        }}>
            {props.children}
        </BountyContext.Provider>
    )

}

export {BountyContext, BountyContextProvider}