import React from "react";
import {addPost, updateNewPostText} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {dispatch(addPostActionCreator())},
//         updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
//     }
// }
const MyPostsContainer = connect(mapStateToProps,  {addPost,updateNewPostText})(MyPosts);

export default MyPostsContainer;