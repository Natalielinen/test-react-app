import React from "react";
import classes from './Messages.module.css';


const Messages = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.usersList}>
                <div className={classes.user}>Гарик</div>
                <div className={classes.user}>Соня</div>
                <div className={classes.user}>Белка</div>
                <div className={classes.user}>Дуся</div>
                <div className={classes.user}>Василий</div>
                <div className={classes.user}>Джон</div>
                <div className={classes.user}>Карась</div>
            </div>
            <div className={classes.items}>
                <div className={classes.item}>Мяу!!!</div>
                <div className={classes.item}>Гав-гав!!!</div>
                <div className={classes.item}>*звуки улитки*</div>
            </div>
        </div>
    )
}

export default Messages;