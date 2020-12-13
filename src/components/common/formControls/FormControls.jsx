import React from 'react';
import classes from './FormControls.module.css';


export const Texarea = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error;
    
    return (
        <div className ={classes.formControl +" "+ (showError ? classes.error : " ")}>
            <div>
            <textarea  {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}

            </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error;
    
    return (
        <div className ={classes.formControl +" "+ (showError ? classes.error : " ")}>
            <div>
            <input  {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}

            </div>
    )
}