import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/paginator/Paginator";

const User = ({user, followingInProgress, unfollow, follow }) => {


    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
            </NavLink>
        </div>

        <div>
            {user.followed
                ? <button className="greenBtn"
                          disabled={followingInProgress.some(id => id === user.id)} onClick=
                              {() => {
                                  unfollow(user.id);
                              }}>Unfollow</button>
                : <button className="greenBtn"
                          disabled={followingInProgress.some(id => id === user.id)} onClick=
                              {() => {
                                  follow(user.id);
                              }}>Follow</button>}
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
    </div>


}

export default User;


