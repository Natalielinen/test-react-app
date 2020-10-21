import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route} from "react-router-dom"
import store from "./components/redux/store";
import DialogsContainer from './components/messages/DialogsContainer';


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='content'>
                <Route path='/profile' render={() => <Profile
                    store = {props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store = {props.store}
                    dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
