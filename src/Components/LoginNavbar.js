import React from 'react';
// import {useNavigate} from 'react-router-dom';
import '../styles/loginPage.css'

const LoginNavbar = () => {
    
    return (
        <nav className='nav'>
        <span>Cloud Storage</span>
        <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#midLine">Login</a></li>
            <li><a href="/#overview">Overview</a></li>
            <li><a href="/#docs">Docs</a></li>
            <li><a href="">Download App</a></li>
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