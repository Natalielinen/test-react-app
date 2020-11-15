import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';

const LoginForm = (props) => {
    return (
<div >
    <form onSubmit = {props.handleSubmit} className = {classes.loginForm} >
        <div><Field component = {'input'} name = {'login'} placeholder = {'Enter login'} type={"text"} className = {classes.formText} required/></div>
        <div><Field component = {'input'} name = {'password'} placeholder = {'Enter password'} type={"password"} className = {classes.formPassword} required/></div>
        <div><Field component = {'input'} name = {'rememberMe'} type={'checkbox'} className = {classes.formCheckbox}/> Remember me</div>
        <div><button className = "greenBtn">Login</button></div>
    </form>
</div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);

    }
    return (
<div className = {classes.formContainer}>
    <h3>Login</h3>
    <LoginReduxForm onSubmit = {onSubmit}/>
</div>
    )
}

export default Login;