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
            <div className={classes.posts}>
                <h3>My posts</h3>
                <textarea rows = "5" cols = "45" ref = {newPostElement}></textarea><br/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>{postsElements}</div>
        </div>

    )
}

export default MyPosts;