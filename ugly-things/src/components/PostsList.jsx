import React from "react"
import Post from "./Post"
import { PageContext } from "./UseContext"

function PostsList(){

    const {postList} = React.useContext(PageContext)

    const list = postList.map(data => {
        return (
            <Post
                key={data._id} 
                title={data.title}
                url={data.imgUrl}
                description={data.description}
                id={data._id}
            />
        )
    })

    return (
        <div>
            {list}
        </div>
    )
    
}

export default PostsList