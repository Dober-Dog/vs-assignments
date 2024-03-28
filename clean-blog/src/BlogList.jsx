import BlogPosts from "./BlogPosts"
import posts from "./posts"

export default function BlogList(){
    const post = posts.map(item => {
        return(
            <BlogPosts 
                title={item.title}
                subTitle={item.subTitle}
                author={item.author}
                date={item.date}
            />
        )
    })
    return(
        <div className="blog">
            {post}
            <div className="buttonBox">
                <button>{`SEE OLDER POSTS >>`}</button>
            </div>
        </div>
    )
}