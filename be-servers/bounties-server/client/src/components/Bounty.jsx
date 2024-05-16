import { useState } from "react"
import BountyForm from "./BountyForm"

export default function Bounty(props){
    const [edit, setEdit] = useState(false)

    return (
        <div className="bounty">
            { !edit ?
                <>
                    <h1>{props.target}</h1>
                    <h2>{props.bounty} credits</h2>
                    <div className="bounty-buttons">
                        <button onClick={() => setEdit(prevEdit => !prevEdit)}>Edit Bounty</button>
                        <button onClick={() => props.remove(props._id)}>Remove Bounty</button>
                    </div>
                </>
            :
                <>
                    <BountyForm
                        target={props.target}
                        bounty={props.bounty}
                        submit={props.editBounty}
                        btnText= "Apply Changes"
                        _id={props._id}
                        edit={edit}
                        setEdit={setEdit}
                    />
                    <button onClick={() => setEdit(prevEdit => !prevEdit)} className="close-button">Close</button>
                </>
            }
        </div>
    )
}