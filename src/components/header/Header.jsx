import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/1792436/ce9e78a9-6fd3-406b-aff4-0f4ff7c333f3/s1200' alt = ''/>
                <div className = {classes.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to = {'/login'}>Login</NavLink> }
                </div>
        </header>
    )
}

export default Header;