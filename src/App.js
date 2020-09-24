import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Messages from "./components/messages/Messages";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Messages />
            <News />
            <Music />
            <Settings />
        </div>
    );
}

export default App;
