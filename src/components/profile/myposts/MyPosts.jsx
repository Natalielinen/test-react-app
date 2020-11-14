import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {


    let postsElements = props.postData.map(post => <Post message={post.text} key = {post.id} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/><br/>
                <button className = "greenBtn" onClick={addPost}>Add Post</button>
            </div>
            <div>{postsElements}</div>
        </div>

    )
}

export default MyPosts;