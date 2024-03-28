export default function Pet(props){
    return (
        <div className="pets">
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
            <hr></hr>
        </div>
    )
}