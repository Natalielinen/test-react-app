import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

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
