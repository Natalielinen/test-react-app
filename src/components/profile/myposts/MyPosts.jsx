import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../../../utilites/validators/validators';
import { Texarea } from "../../common/formControls/FormControls";

const maxLength10 = maxLengthCreator(10);


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
            <Field component = {Texarea} 
                   name = {'newPostText'} 
                   placeholder = {'Enter something'} 
                   validate={[required, maxLength10]}/><br/>
            <button className = "greenBtn" >Add Post</button>
            </form>
            </div>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(AddNewPostForm)

export default MyPosts;