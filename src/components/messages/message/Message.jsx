import classes from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={classes.item}>{props.text}</div>
        <div>some textdbdrg</div>
    )
}

export default Message;