import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./myposts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}/>
        </div>
    )
}

export default Profile;