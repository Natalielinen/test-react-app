import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    let postData = [
        {id:1, text: 'Hello, world!', likesCount: '15'},
        {id:2, text: 'This is my first react app.', likesCount: '20'},
        {id:3, text: 'I understood props!!!', likesCount: '200'},
    ];

    return (
        <div>
            My posts
            <div>
                <textarea></textarea><br/>
                <button>Add Post</button>
            </div>
            <Post message ={postData[0].text} likesCount = {postData[0].likesCount}/>
            <Post message ={postData[1].text} likesCount = {postData[1].likesCount}/>
            <Post message ={postData[2].text} likesCount = {postData[2].likesCount}/>
        </div>

    )
}

export default MyPosts;