import classes from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {


    return (
        <div className={classes.item}>{props.text}
        <div>Some textttyui</div>
        </div>
    )
}

export default Message;