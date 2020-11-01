import React from "react";
import Loader from "../../common/loader/Loader";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Loader />

    }
    debugger;
    return (
        <div className={classes.info}>
            <img src='https://invigor.by/assets/images/resources/130/0415-a.jpg'/>
            <div className={classes.description}>
                <img style = { {width: '50px' } } src= {props.profile.photos.small} alt="123"/>
                ava+description
                </div>
        </div>
    )
}

export default ProfileInfo;