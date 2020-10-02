import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    let postData = [
        {id:1, text: 'Hello, world!', likesCount: '15'},
        {id:2, text: 'This is my first react app.', likesCount: '20'},
        {id:3, text: 'I understood props!!!', likesCount: '200'},
    ];
     let postsElements = postData.map(post => <Post message ={post.text} likesCount = {post.likesCount}/> )
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