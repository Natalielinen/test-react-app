import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <p>
                <img src='https://i.pinimg.com/originals/47/3a/65/473a65fa8aa6a0be5c91757806b13349.jpg'/>
                {props.message}<br/>
                <strong>Likes: {props.likesCount}</strong>
            </p>
        </div>
    )
}

export default Post;