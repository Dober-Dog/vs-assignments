export default function Square(props){

    const id = props.id

    const style={
        backgroundColor: props.color
    }

    return (
        <div className="box" style={style} onClick={() => props.smallTime(id)}></div>
    )
}