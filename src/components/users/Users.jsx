import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props) => {
   
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return (
            
            <div className = {classes.usersList}>

        {pages.map(p=>{ return <span key = {p.id} 
        onClick = {(e)=>{props.onPageChanged(p);}}> {p}</span>})}
               
                {
                    props.users.map(u=><div key = {u.id}>
                        <span>
                            <div>
                                <NavLink to = {'/profile/' + u.id }>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto } alt=""/>
                                    </NavLink>
                            </div>
                            <div>
                                {u.followed 
                                ? <button disabled = {props.followingInProgress.some(id => id===u.id)} onClick = {() => {
                                   
                                    props.toggleFollowingProgress(true, u.id);
                            
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                headers: {
                                    "API-KEY": "e026ec0f-7833-4039-8390-70ab672c69d9"
                                }
                            })
                                   .then(response => {
                                       if(response.data.resultCode === 0){
                                        props.unfollow(u.id);
                                       }
                                       props.toggleFollowingProgress(false, u.id);
                                });  
                                }}>Unfollow</button>

                                :<button disabled = {props.followingInProgress.some(id => id===u.id)} onClick = {() => {
                                    props.toggleFollowingProgress(true, u.id);
                                   
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                    headers: {
                                        "API-KEY": "e026ec0f-7833-4039-8390-70ab672c69d9"
                                    }
                                })
                                   .then(response => {
                                       if(response.data.resultCode === 0){
                                        props.follow(u.id);
                                       }
                                       props.toggleFollowingProgress(false, u.id);
                                });  
                                    }}>Follow</button>} 
                            </div>
                        </span>
                        <span>
                            <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                            </span>
                            <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }

export default Users;