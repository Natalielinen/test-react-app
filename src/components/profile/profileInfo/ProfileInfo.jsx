import React from "react";
import Loader from "../../common/loader/Loader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'



const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Loader />

    }
  
    return (
        <div className={classes.info}>
             <img src='https://invigor.by/assets/images/resources/130/0415-a.jpg'/>
            <div className={classes.description}>
                 <img style = { {width: '50px' } } src= {profile.photos.small != null
                 ? profile.photos.small
                 : userPhoto} alt={profile.fullName}/>
                <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
                <div>
          {profile.aboutMe
          ?(<span>Обо мне: {profile.aboutMe}</span>)
          : null}
     </div>
        <div>
          <span>Полное имя</span>: {profile.fullName}
        </div>
        <div>
          <span>Готовность к работе</span>:
          {profile.lookingForAJob
            ? profile.lookingForAJobDescription
            : 'Не ищу работу'}
        </div>
                </div>
        </div>
    )
}

export default ProfileInfo;