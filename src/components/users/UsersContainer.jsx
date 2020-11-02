import React from 'react';
import classes from './UsersContainer.module.css';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import {follow, 
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching} from '../redux/usersReducer';
import Loader from '../common/loader/Loader';

class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });  
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }

};


export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
    }) (UsersContainer);