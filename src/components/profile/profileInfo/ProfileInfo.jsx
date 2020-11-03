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
                <div>
          {props.profile.aboutMe 
          ?(<span>Обо мне: {props.profile.aboutMe}</span>) 
          : null}
     </div>
        <div>
          <span>Полное имя</span>: {props.profile.fullName}
        </div>
        <div>
          <span>Готовность к работе</span>:
          {props.profile.lookingForAJob
            ? props.profile.lookingForAJobDescription
            : 'Не ищу работу'}
        </div>
                </div>
        </div>
    )
}

export default ProfileInfo;