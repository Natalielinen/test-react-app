import React from "react";
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };
    return (<Dialogs updateNewMessageBody = {onNewMessageChange}
    newMessage = {newMessage}
    dialogsPage = {state}/>)
}

export default DialogsContainer;