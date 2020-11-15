import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {


    let postsElements = props.postData.map(post => <Post message={post.text} key = {post.id} likesCount={post.likesCount}/>)




    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (

        
        <div>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <PostReduxForm onSubmit = {addNewPost}/>
            </div>
            <div>{postsElements}</div>
        </div>

    )

  
}

const AddNewPostForm = (props) => {
    
    return (
        <div>
        <form onSubmit = {props.handleSubmit}> 
            <Field component = {'textarea'} name = {'newPostText'} placeholder = {'Enter something'}/><br/>
            <button className = "greenBtn" >Add Post</button>
            </form>
            </div>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(AddNewPostForm)

export default MyPosts;