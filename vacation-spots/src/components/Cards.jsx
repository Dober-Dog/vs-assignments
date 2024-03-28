export default function Cards(props){
    let season
    if( props.timeToGo === "Winter"){
        season = "place--card--winter"
    } else if (props.timeToGo === "Summer"){
        season = "place--card--summer"
    } else if (props.timeToGo === "Fall"){
        season = "place--card--fall"
    } else if (props.timeToGo === "Spring"){
        season = "place--card--spring"
    }
    return (
        <div className={season}>
            <h1>{props.place}</h1>
            <p>${props.price}</p>
            <p>Best time to visit: {props.timeToGo}</p>
        </div>
    )
}