import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
     let postsElements = props.postData.map(post => <Post message ={post.text} likesCount = {post.likesCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
         alert(text);
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref = {newPostElement}></textarea><br/>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>

    )
}

export default MyPosts;