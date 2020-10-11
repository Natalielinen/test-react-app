import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={classes.menu}>
            <div className='item'>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
        </div>
    )
}
const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <p><img src={props.img}/></p>
            <p>{props.name}</p>
        </div>
    )
}

const Navbar = (props) => {
    let sidebarFriends = props.state.friends.map(f => <Sidebar name={f.name} img={f.img}/>)
    return (
        <div className={classes.navbar}>
            <Menu/>
            {sidebarFriends}
        </div>
    )
}

export default Navbar;