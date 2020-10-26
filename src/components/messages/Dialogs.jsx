import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map(dialog => <DialogItem 
        name={dialog.name} 
        key = {dialog.id} 
        id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message text={message.text} key = {message.id}/>);
    let newMessageBody = state.newMessageBody;


    let newMessage = () => {
        props.newMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                {dialogsElement}
            </div>

            <div className={classes.items}>
                <div>{messagesElements}</div>
                <div><textarea
                    placeholder='Enter your message'
                    value={newMessageBody}
                    onChange={onNewMessageChange}/></div>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;