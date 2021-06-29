import React from 'react';
import './Toolbar.sass'
import {Link} from 'react-router-dom'
import {FaSearch} from "react-icons/fa";

function Toolbar() {
    return (
        <div className='toolbar d-flex align-items-center justify-content-between'>
            <img className='toolbar-logo' src="https://i.imgur.com/64OfA9W.png" alt=""/>
            <div className='d-flex'>
                <input type="text" className='search-input' placeholder='Search for articles...'/>
                <Link className='search-button' to="/search/test">
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className='d-flex align-items-center no-padding no-margin'><FaSearch/></p>
                </Link>
            </div>
            <div className='d-flex text-white'>
                dar pl
            </div>
        </div>
    );
}

export default Toolbar;