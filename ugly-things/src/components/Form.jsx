import axios from "axios"
import React, {useState} from "react"
import { PageContext } from "./UseContext"

export default function Form(){
    const [form, setForm] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    function updateForm(event){
        const {name, value} = event.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const {makeRequest} = React.useContext(PageContext)

    function sendData(){
        axios.post("https://api.vschool.io/loganrussell/thing", form)
            .then(() => {
                setForm({
                    title: "",
                    imgUrl: "",
                    description: ""
                })
                makeRequest()
            })
            .catch(error => {
                console.error("Error sending data:", error)
        })
    }

    return (
        <div className="form">
            <h1>Welcome to a list of ugly things!</h1>
            <div className="inputs">
                <input name="title" value={form.title} placeholder="Title" onChange={updateForm} required></input>
                <input name="imgUrl" value={form.imgUrl} placeholder="Img URL" onChange={updateForm} required></input>
                <input name="description" value={form.description} placeholder="Description" onChange={updateForm} minLength={3}></input>
            </div>
            <button onClick={sendData}>Submit</button>
        </div>
    )

}