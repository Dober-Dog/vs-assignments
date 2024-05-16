import Player from "./Player"


export default function PlayerList(props){
    

    const list = props.players.map(player => {
        return(
            <Player
                key={player._id}
                _id={player._id} 
                name={player.name}
                position={player.position}
                battingAvg={player.battingAvg}
                era={player.era}
                remove={props.remove}
                addInfo={props.addInfo}
            />
        )
    })


    return (
        <div className="roster">
            {list}
        </div>
    )


}