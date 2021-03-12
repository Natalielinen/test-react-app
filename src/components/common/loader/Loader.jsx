import React from 'react';
import loader from './../../../assets/images/loader.gif';

const Loader = (props) => {
    return (
        <div>
            <img src={loader} alt="Loader" style={{width: '50px'}}/>
        </div>
    )
}

export default Loader;