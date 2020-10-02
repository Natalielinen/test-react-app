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

    let dialogsData = [
        {id:1, name: 'Гарик'},
        {id:2, name: 'Соня'},
        {id:3, name: 'Белка'},
        {id:4, name: 'Дуся'},
        {id:5, name: 'Василий'},
        {id:6, name: 'Джон'},
        {id:7, name: 'Карась'}
    ];
     let dialogsElement = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

    let messagesData = [
        {id:1, text: 'Мяу!!!'},
        {id:2, text: 'Гав-гав!!!'},
        {id:3, text: '*звуки улитки*'}
    ];
    let messagesElements = messagesData.map(message => <Message text = {message.text}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                {dialogsElement}
            </div>
            <div className={classes.items}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;