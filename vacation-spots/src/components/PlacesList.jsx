import Cards from "./Cards"
import vacationSpots from "./vacationSpots"

export default function PlacesList(){
    const list = vacationSpots.map(item => {
        return(
            <Cards
                img={item.img}
                place={item.place}
                price={item.price}
                timeToGo={item.timeToGo}
            />            
        )
    })
    return (
        <div>
            <div className="tagline">
                <h3>Enjoy Yourself Thought Our Exclusive Vacation Deals!</h3>
                <div className="pricing">
                    <span>Not sure about the price? check out our </span>
                    <a href="#">{`pricing options >>`}</a>
                </div>
            </div>
            <div className="place--list">
                {list}
            </div>
        </div>
            
    )
}