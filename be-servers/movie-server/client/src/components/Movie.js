import React, { useState } from "react"
import AddMovieForm from "./AddMovieForm"

export default function Movie(props){
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div>
            { !editToggle ?
                <>
                <h1>Title: {props.title}</h1>
                <p>Genre: {props.genre}</p>
                <button onClick={() => props.deleteMovie(props._id)}>Delete</button>
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
            :
                <>
                <AddMovieForm 
                    title = {props.title}
                    genre = {props.genre}
                    btnText = "Submit Edit"
                    submit = {props.editMovie}
                    _id = {props._id}
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}