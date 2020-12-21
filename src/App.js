import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route, withRouter} from "react-router-dom"
import DialogsContainer from './components/messages/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './components/redux/appReducer';
import Loader from './components/common/loader/Loader';



class App extends React.Component {
    componentDidMount () {
        this.props.initializeApp(); 
    }
    render () {
        if(!this.props.initialized){
        return <Loader />}

    return  (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className='content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login /> }/>
            </div>
        </div>

    );
}
}

const mapStateToProps =(state) => ({
    initialized: state.app.initialized

})

export default withRouter(  connect(mapStateToProps, {initializeApp })(App));
