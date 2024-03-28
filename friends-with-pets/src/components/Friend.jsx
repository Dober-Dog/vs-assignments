import Pet from "./Pet"

export default function Friend(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            {props.pets.map(pet => {
                return (
                    <div>
                        <Pet
                            name={pet.name}
                            breed={pet.breed}
                        />
                    </div>
                )
            })}
        </div>
    )
}