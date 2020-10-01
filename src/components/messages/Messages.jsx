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

    let messagesData = [
        {id:1, text: 'Мяу!!!'},
        {id:2, text: 'Гав-гав!!!'},
        {id:3, text: '*звуки улитки*'}
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
                <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
                <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
                <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>
                <DialogItem name = {dialogsData[5].name} id = {dialogsData[5].id}/>
                <DialogItem name = {dialogsData[6].name} id = {dialogsData[6].id}/>
            </div>
            <div className={classes.items}>
                <Message text = {messagesData[0].text}/>
                <Message text = {messagesData[1].text}/>
                <Message text = {messagesData[2].text}/>
            </div>
        </div>
    )
}

export default Messages;