import React from 'react';
import '../styles/loginPage.css'

const LoginNavbar = () => {
    return (
        <nav className='nav'>
            <span>Cloud Storage</span>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#midLine">Login</a></li>
                <li><a href="/#overview">Overview</a></li>
                <li><a href="/#docs">Docs</a></li>
                <li><a href="https://drive.google.com/file/d/1sIbZDMOy5FZnVg1KJADEpi-P4bN3Gn5x/view?usp=sharing" target='_blank'>Download App</a></li>
                <li><a href="/#contactLine">Contact Us</a></li>
            </ul>

            <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )

}



export default LoginNavbar;