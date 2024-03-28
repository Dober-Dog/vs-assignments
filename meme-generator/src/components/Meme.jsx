import React from "react"
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/4/30b1gx.jpg",
        name: ""
    })
    const [allMemes, setAllMemes] = React.useState([])
    const [savedMemes, setSavedMemes] = React.useState([])
    const [viewMemes, setViewMemes] = React.useState(false)

    function handleChange(event){
        const{name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function newMeme(){
        const ranNum = Math.floor(Math.random() * allMemes.length)
        const newImg = allMemes[ranNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            url: newImg
        }))
    }

    function saveMeme() {
        if (meme.name){
            setMeme(prevMeme => ({
                ...prevMeme,
                id: uuidv4()
            }))
            setSavedMemes(prevList => {
                return ([
                    ...prevList,
                    meme
                ])
            })
            setMeme(prevMeme => ({
                ...prevMeme,
                topText: "",
                bottomText: "",
                name: "",
            }))
            console.log(savedMemes)
        } else {
            alert("You must name the meme to save it")
        }
    }


    function handleShow(){
        setViewMemes(prevState => !prevState)
    }

    function remove(key){
        setSavedMemes(prevList => prevList.filter(index => index !== key))
    }

    function edit(key){{
        setMeme({
            topText: key.topText,
            bottomText: key.bottomText,
            url: key.url,
            name: key.name
        })
    }}

    const savedList = savedMemes.map(index => {
        return (
            <div key={index} className="meme-list">
                <h2>{index.name}</h2>
                <div className="meme-box-preview">
                    <img src={index.url} className="meme-preview" />
                    <h2 className="top-text-preview">{index.topText}</h2>
                    <h2 className="bottom-text-preview">{index.bottomText}</h2>
                </div>
                <div>
                    <button onClick={() => remove(index)}>Remove Meme</button>
                    <button onClick={() => edit(index)}>Edit Meme</button>
                </div>
            </div>
        )
    })

    React.useEffect(() =>
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => setAllMemes(res.data.data.memes))
    , [])

    return(
        <div>
            <div className="memeForm">
                <input 
                    name="topText" 
                    placeholder="Top Text" 
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>
                <button className="form--button" onClick={newMeme}>Get a new meme image</button>
            </div>
            <div className="meme-box">
                <img src={meme.url} className="meme" />
                <h2 className="top-text">{meme.topText}</h2>
                <h2 className="bottom-text">{meme.bottomText}</h2>
            </div>
            <div className="name">
                <label htmlFor="name">Name this meme?</label>
                <input name="name" placeholder="name" value={meme.name} onChange={handleChange}></input>
            </div>
            <div className="save-button">
                <button className="form--button" onClick={saveMeme}>Save This Meme</button>
            </div>
            <div className="show-button">
                <button className="form--button" onClick={handleShow}>{viewMemes ? "Hide" : "Show"} Saved Memes</button>
            </div>
            <div className="savedList">
                {viewMemes && savedList}
            </div>
        </div>
    )
}