import React from 'react';
import loaderGif from './../../assets/img/g0R9.gif';
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loaderGif} alt="loader"/>
        </div>
        
    )
}

export default Loader;
