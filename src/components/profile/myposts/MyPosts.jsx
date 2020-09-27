import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea><br/>
                <button>Add Post</button>
            </div>
            <Post message = 'Hello, world!' likesCount = '15'/>
            <Post message = 'This is my first react app.' likesCount = '20'/>
            <Post message = 'I understood props!!!' likesCount = '200'/>
        </div>

    )
}

export default MyPosts;