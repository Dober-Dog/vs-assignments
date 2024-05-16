import { useState } from "react"

export default function BountyForm(props){

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
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.edit !== undefined && props.setEdit(!props.edit)
    }

    return (
        <form onSubmit={handleSubmit} className="bounty-form">
            <input type="text" name="target" placeholder="Target" value={inputs.target} onChange={handleChange}/>
            <input type="text" name="bounty" placeholder="Bounty" value={inputs.bounty} onChange={handleChange}/>
            <button>{props.btnText}</button>
        </form>
    )

}