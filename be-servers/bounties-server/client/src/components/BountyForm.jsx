import axios from "axios"
import { useContext, useState } from "react"
import { BountyContext } from "./bountyContext"
import { v4 as uuidv4 } from "uuid"

export default function BountyForm(props){
    const { setBounties } = useContext(BountyContext)

    const initInputs = {
        target: props.target || "",
        bounty: props.bounty || "",
        living: props.living || true,
        _id: props._id || null
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        inputs._id = uuidv4()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} className="bounty-form">
            <input type="text" name="target" placeholder="Target" value={inputs.target} onChange={handleChange}/>
            <input type="text" name="bounty" placeholder="Bounty" value={inputs.bounty} onChange={handleChange}/>
            <button>{props.btnText}</button>
        </form>
    )

}