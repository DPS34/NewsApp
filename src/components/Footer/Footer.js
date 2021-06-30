import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.sass'
function Footer() {
    return (
        <div className='footer d-flex justify-content-around align-items-center'>
            <Link to="/">
            <img className='footer-logo' src="https://i.imgur.com/A7BQDaC.png" alt=""/>
            </Link>
            <div className='text-white select-enabled'>
                <p>Phone: +37061581898</p>
                <p>Gmail: domantas.va@gmail.com</p>
            </div>
            <div style={{color: '#666666'}}>© 2021</div>
        </div>
    );
}

export default Footer;