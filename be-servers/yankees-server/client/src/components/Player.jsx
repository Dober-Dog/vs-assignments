import { useState } from "react"
import PlayerForm from "./PlayerForm"

export default function Player(props){
    const [edit, setEdit] = useState(false)

    function toggleEdit(){
        setEdit(prevEdit => !prevEdit)
    }

    return (
        <div className="player">
            <h2>{props.name}</h2>
            <p>Position: {props.position}</p>
            {props.battingAvg && <p>Batting Average: {props.battingAvg}</p>}
            {props.era && <p>ERA: {props.era}</p>}
            <div className="player-buttons">
                <button onClick={() => props.remove(props._id)}>Remove From Roster</button>
                <button onClick={toggleEdit}>Update Player</button>
            </div>
            {edit && <PlayerForm
                name={props.name}
                position={props.position}
                battingAvg={props.battingAvg}
                era={props.era}
                btnTxt="Update Player"
                _id={props._id}
                submit={props.addInfo}
                toggleEdit={toggleEdit}
            />}
        </div>
    )
}