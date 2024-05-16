import { useState } from "react"

export default function PlayerForm(props){
    const initInputs = {
        name: props.name || "",
        position: props.position || "",
        battingAvg: props.battingAvg || "",
        era: props.era|| ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const { name, value } = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.toggleEdit && props.toggleEdit()
    }

    return(
        <form className="player-form">
            <input type="text" placeholder="Name" value={inputs.name} name="name" onChange={handleChange}/>
            <select name="position" onChange={handleChange}>
                <option value="">--Choose Position--</option>
                <option value="SP">SP</option>
                <option value="RP">RP</option>
                <option value="C">C</option>
                <option value="1B">1B</option>
                <option value="2B">2B</option>
                <option value="SS">SS</option>
                <option value="3B">3B</option>
                <option value="LF">LF</option>
                <option value="CF">CF</option>
                <option value="RF">RF</option>
                <option value="DH">DH</option>
            </select>
            <input type="number" name="battingAvg" placeholder="Batting Average" value={inputs.battingAvg} onChange={handleChange} />
            <input type="number" name="era" placeholder="ERA" value={inputs.era} onChange={handleChange} />
            <button onClick={handleSubmit}>{props.btnTxt}</button>
        </form>
    )


}