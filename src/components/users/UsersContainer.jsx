import React from 'react';
import classes from './UsersContainer.module.css';
import { connect } from 'react-redux';
import Users from './Users';
import {follow, 
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching,
    toggleFollowingProgress} from '../redux/usersReducer';
import Loader from '../common/loader/Loader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers (this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });  
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers (pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        }); 
    }


render () {

    return  <div className = {classes.cont}>
    {this.props.isFetching ? <Loader /> : null }
    <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   users = {this.props.users}
                   unfollow = {this.props.unfollow}
                   follow = {this.props.follow}
                   toggleFollowingProgress = {this.props.toggleFollowingProgress}
                   followingInProgress = {this.props.followingInProgress}
                   />
                   </div>
}

}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

};


export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
    }) (UsersContainer);