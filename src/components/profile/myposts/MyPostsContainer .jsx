import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
debugger;
const MyPostsContainer = (props) => {
    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);

    };
     
    return (
    <MyPosts 
    updateNewPostText = {onPostChange} 
    onAddPost = {addPost} 
    postData = {state.profilePage.postData}
    newPostText = {state.profilePage.newPostText}/>)
}

export default MyPostsContainer;