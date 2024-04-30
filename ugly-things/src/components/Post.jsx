import axios from "axios"
import { PageContext } from "./UseContext"
import React from "react"

export default function Post(props){

    const [text, setText] = React.useState({
        description: props.description
    })
    const [edit, setEdit] = React.useState(false)

    const {makeRequest} = React.useContext(PageContext)

    const readOnly = edit ? "" : "readonly"

    function handleChange(event){
        const {name, value} = event.target
        setText(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    function change(){
        setEdit(prevEdit => !prevEdit)
    }

    function submit(){
        axios.put(`https://api.vschool.io/loganrussell/thing/${props.id}`, text)
            .then(() => makeRequest())
            .then(change())
            .catch(error => console.error("Error updating post:", error))
    }

    function erase() {
        axios.delete(`https://api.vschool.io/loganrussell/thing/${props.id}`)
            .then(() => makeRequest())
            .catch(error => console.error("Error deleting post:", error))
    }

    const editStyle = {
        backgroundColor: "goldenrod"
    }

    return (
        <div className="post">
            <h2>{props.title}</h2>
            <img src={props.url} />
            <textarea value={text.description} name="description" onChange={handleChange} readOnly={readOnly} style={edit ? editStyle : null}>{props.description}</textarea>
            <div className="edit-buttons">
                <button onClick={erase}>Remove Post</button>
                {!edit && <button onClick={change}>Edit Post</button>}
                {edit && <button onClick={submit}>Submit Changes</button>}
            </div>
        </div>
    )
}