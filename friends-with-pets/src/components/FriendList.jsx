import Friend from "./Friend"
import friendsList from "./friendsList"

export default function FriendList(){
    const person = friendsList.map(item => {
        return (
            <div className="friend--card">
                <Friend 
                    name={item.name}
                    age={item.age}
                    pets={item.pets}
                />
            </div>
        )
    })
    return person
}