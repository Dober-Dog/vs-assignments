export default function Badge (props){

    return (
        <div className="badge">
            <div className="banner">Badge:</div>
            <div className="flexbox">
                <span>Name: {props.firstName} {props.lastName}</span>
                <span>Phone: {props.phone}</span>
                <span>Place of Birth: {props.birthplace}</span>
                <span>Favorite Food: {props.favFood}</span>
                <span className="email">Email: {props.email}</span>
                <div className="textbox">{props.info}</div>
            </div>
        </div>
    )
}