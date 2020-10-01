import React from "react";
import classes from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={classes.user}>
            <NavLink to = {path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.item}>{props.text}</div>
    )
}
const Messages = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                <DialogItem name = 'Гарик' id ='1'/>
                <DialogItem name = 'Соня' id ='2'/>
                <DialogItem name = 'Белка' id ='3'/>
                <DialogItem name = 'Дуся' id ='4'/>
                <DialogItem name = 'Василий' id ='5'/>
                <DialogItem name = 'Джон' id ='6'/>
                <DialogItem name = 'Карась' id ='7'/>
            </div>
            <div className={classes.items}>
                <Message text = 'Мяу!!!'/>
                <Message text = 'Гав-гав!!!'/>
                <Message text = '*звуки улитки*'/>
            </div>
        </div>
    )
}

export default Messages;