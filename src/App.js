import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {connect, Provider} from 'react-redux';
import {initializeApp} from './components/redux/appReducer';
import Loader from './components/common/loader/Loader';
import store from './components/redux/reduxStore';

/*import DialogsContainer from './components/messages/DialogsContainer';*/
//import ProfileContainer from './components/profile/ProfileContainer';
//import Login from './components/login/Login';
//import UsersContainer from './components/users/UsersContainer';
//import News from "./components/news/News";
//import Music from "./components/music/Music";
//import Settings from "./components/settings/Settings";

const DialogsContainer = React.lazy(() => import('./components/messages/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/login/Login'));
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'));
const News = React.lazy(() => import('./components/news/News'));
const Music = React.lazy(() => import('./components/music/Music'));
const Settings = React.lazy(() => import('./components/settings/Settings'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized

})

let AppContainer = withRouter(connect(mapStateToProps, {initializeApp})(App));

export const SamuraiJSApp = () => {
    return (
        <Suspense fallback={<Loader />}>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
        </Suspense>
    )
}