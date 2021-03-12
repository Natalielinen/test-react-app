import React from 'react';
import classes from './Users.module.css';
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return <div className={classes.usersList}>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}/>

        {
            props.users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}/>)

        }
    </div>
}

export default Users;