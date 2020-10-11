import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={classes.info}>
            <img src='https://invigor.by/assets/images/resources/130/0415-a.jpg'/>
            <div className={classes.description}>ava+description</div>
        </div>
    )
}

export default ProfileInfo;