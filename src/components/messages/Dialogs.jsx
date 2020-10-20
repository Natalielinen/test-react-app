import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message text={message.text}/>);
    let newMessageBody = state.newMessageBody;


    let newMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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