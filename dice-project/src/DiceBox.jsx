export default function DiceBox (props){
    return (
        <div className="dice--container">
            <div className="dicebox">
                <div className="dice">{props.dice1}</div>
                <div className="dice">{props.dice2}</div>
                <div className="dice">{props.dice3}</div>
                <div className="dice">{props.dice4}</div>
                <div className="dice">{props.dice5}</div>
                <div className="dice">{props.dice6}</div>
            </div>
            <div className="reroll">
                <button onClick={props.handleNew}>Reroll</button>
            </div>
        </div>
    )
}