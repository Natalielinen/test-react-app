import React from "react";
import {Redirect} from "react-router-dom";
import classes from './Dialogs.module.css';
import DialogItem from "./dialogsItem/DialogItem";
import Message from "./message/Message";
import {Field, reduxForm} from 'redux-form';
import {Textarea} from "../common/formControls/FormControls";
import {required, maxLengthCreator} from "../../utilites/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogsData.map(dialog => <DialogItem
        name={dialog.name}
        key={dialog.id}
        id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message text={message.text} key={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    ;
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                {dialogsElement}
            </div>

            <div className={classes.items}>
                <div>{messagesElements}</div>
                <MessageReduxForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}


const maxLength100 = maxLengthCreator(100);
const MessageForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={'newMessageBody'}
                       placeholder='Enter your message'
                       validate={[required, maxLength100]}/>

                <div>
                    <button className="greenBtn">Send</button>
                </div>
            </form>


        </div>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)
export default Dialogs;