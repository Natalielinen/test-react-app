import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../utilites/validators/validators';
import {createField, Input} from '../common/formControls/FormControls';
import classes from './Login.module.css';
import {connect} from "react-redux";
import {login} from '../redux/authReducer';
import {Redirect} from 'react-router-dom';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
                {createField('Enter email', 'email', Input, [required], 'text', classes.formText)}
                {createField('Enter password', 'password', Input, [required], 'password', classes.formPassword)}
                {createField('', 'rememberMe', Input, [], 'checkbox', classes.formCheckbox)}
                <span>Remember me</span>
                <div>
                    {error && <div className={classes.someError}>
                        {error}
                    </div>}
                    <button className="greenBtn">Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={classes.formContainer}>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth

})

export default connect(mapStateToProps, {login})(Login);