import React from 'react';
import classes from './FormControls.module.css';
import {required} from "../../../utilites/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {

    const showError = touched && error;

    return (
        <div className={classes.formControl + " " + (showError ? classes.error : " ")}>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}

        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, component, validator, type, className) =>
    (<div>
        <Field
            component={component}
            name={name}
            placeholder={placeholder}
            type={type}
            className={className}
            validate={validator}/>
    </div>)
