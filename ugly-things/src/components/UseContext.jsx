import React, {useState, useEffect} from "react"
import axios from "axios"

const PageContext = React.createContext()

function PageContextProvider(props){
    const [postList, setPostList] = useState([])

    useEffect(() => {
        axios.get("https://api.vschool.io/loganrussell/thing")
            .then(res => setPostList(res.data))
    }, [])

    const makeRequest = () => {
        axios.get("https://api.vschool.io/loganrussell/thing")
            .then(res => setPostList(res.data))
    }

    return (
        <PageContext.Provider value={{
            postList,
            makeRequest
        }}>
            {props.children}
        </PageContext.Provider>
    )

}

export {PageContext, PageContextProvider}