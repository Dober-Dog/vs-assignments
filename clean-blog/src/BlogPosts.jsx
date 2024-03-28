export default function BlogPosts(props){
    return(
        <div className="post">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <span className="info">Posted by </span>
            <span className="author">{props.author}</span>
            <span className="info"> on {props.date}</span>
            <hr></hr>
        </div>
    )
}