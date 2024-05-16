import React from "react"

export default function AddMovieForm(props){
    const initInputs = { title: props.title || "", genre: props.genre || "", releaseYear: props.releaseYear || "" }
    const [inputs, setInputs] = React.useState(initInputs)

    function handleChange(event){
        const { name, value } = event.target
        setInputs(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form>
            <input type="text" name="title" placeholder="Title" value={inputs.title} onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" value={inputs.genre} onChange={handleChange} />
            <input type="number" name="releaseYear" placeholder="Release Year" value={inputs.releaseYear} onChange={handleChange} />
            <button onClick={handleSubmit}>{props.btnText}</button>
        </form>
    )
}