import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className='item'>
                <a href='/profile'>Profile</a>
            </div>
            <div className='item'>
                <a href='/messages'>Messages</a>
            </div>
            <div className='item'>
                <a href='/news'>News</a>
            </div>
            <div className='item'>
                <a href='/music'>Music</a>
            </div>
            <div className='item'>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;