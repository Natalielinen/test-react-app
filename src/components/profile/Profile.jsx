import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./myposts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://invigor.by/assets/images/resources/130/0415-a.jpg'/>
            <MyPosts />
        </div>
    )
}

export default Profile;