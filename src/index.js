import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {SamuraiJSApp} from './App';
import Loader from "./components/common/loader/Loader";



ReactDOM.render(
    <React.StrictMode>
            <SamuraiJSApp />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
