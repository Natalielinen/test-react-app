import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

     let dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

    let messagesElements = props.state.messagesData.map(message => <Message text = {message.text}/>);
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

export default Dialogs;