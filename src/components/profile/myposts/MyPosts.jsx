import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
     let postsElements = props.postData.map(post => <Post message ={post.text} likesCount = {post.likesCount}/> )
    return (
        <div>
            My posts
            <div>
                <textarea></textarea><br/>
                <button>Add Post</button>
            </div>
            {postsElements}
        </div>

    )
}

export default MyPosts;