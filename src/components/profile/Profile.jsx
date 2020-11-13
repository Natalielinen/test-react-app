import React from "react";
import MyPostsContainer from "./myposts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";




const Profile = (props) => {
    
    
    return (
        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;