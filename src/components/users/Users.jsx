import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    if(props.users.length === 0){
    props.setUsers([
        {id: 1, photoUrl: 'https://avavatar.ru/images/avatars/18/avatar_qNC62OgU7zEPM1NM.jpg',
         followed: false, name: 'Гарик', status: 'snail', location: {city: 'Michurinsk', country: 'Russia'}},
        {id: 2, photoUrl: 'https://sun9-35.userapi.com/c849220/v849220200/14151b/qJ2hcpXCH4k.jpg?ava=1',
        followed: false, name: 'Белка', status: 'dog', location: {city: 'Michurinsk', country: 'Russia'}},
        {id: 3, photoUrl: 'https://sun9-34.userapi.com/c852036/v852036257/1595f6/9jDfpLf_wMo.jpg?ava=1',
        followed: true, name: 'Джонни', status: 'cat', location: {city: 'Michurinsk', country: 'Russia'}}
    ]);}
    return (
        <div className = {classes.usersList}>
            {
                props.users.map(u=><div key = {u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button>
                            :<button onClick = {() => {props.follow(u.id)}}>Follow</button>}
                            
                        </div>
                    </span>
                    <span>
                        <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                        </span>
                        <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;