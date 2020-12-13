import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/1792436/ce9e78a9-6fd3-406b-aff4-0f4ff7c333f3/s1200' alt = ''/>
                <div className = {classes.loginBlock}>
                    {props.isAuth 
                    ? <div>{props.login} <button  onClick = {props.logout} className = "greenBtn" >Logout</button></div> 
                    : <button className = "greenBtn" ><NavLink to = {'/login'}>Login</NavLink></button> }
                </div>
        </header>
    )
}

export default Header;