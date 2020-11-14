import React from 'react';
import classes from './Login.module.css';

const LoginForm = (props) => {
    return (
<div >
    <form className = {classes.loginForm} >
        <div><input placeholder = {'Enter login'} type={"text"} className = {classes.formText}/></div>
        <div><input placeholder = {'Enter password'} type={"password"} className = {classes.formPassword}/></div>
        <div><input type={'checkbox'} className = {classes.formCheckbox}/> Remember me</div>
        <div><button className = "greenBtn">Login</button></div>
    </form>
</div>
    )
}

const Login = (props) => {
    return (
<div className = {classes.formContainer}>
    <h3>Login</h3>
    <LoginForm />
</div>
    )
}

export default Login;