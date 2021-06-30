import React from 'react';
import './Footer.sass'
function Footer() {
    return (
        <div className='footer d-flex justify-content-around align-items-center'>
            <img className='footer-logo' src="https://i.imgur.com/A7BQDaC.png" alt=""/>
            <div className='text-white'>
                <p>Phone: +37061581898</p>
                <p>Gmail: domantas.va@gmail.com</p>
            </div>
            <div style={{color: '#666666'}}>© 2021</div>
        </div>
    );
}

export default Footer;