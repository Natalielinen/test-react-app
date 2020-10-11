import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/messages/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route} from "react-router-dom"


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state = {props.state.sidebar}/>
            <div className='content'>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
