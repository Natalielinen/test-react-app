import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Messages from "./components/messages/Messages";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom"


const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='content'>
                <Route path = '/profile' component={Profile}/>
                <Route path = '/messages' component={Messages}/>
                <Route path = '/news' component={News}/>
                <Route path = '/music' component={Music}/>
                <Route path = '/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
