import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/loginPage.css'

const ListNav = () => {
    return (
        <nav className='nav'>
        <span>Cloud Storage</span>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Files</a></li>
            <li><a href="#">Upload</a></li>
            <li><a href="#">Download App</a></li>
            <li><a href="#">Logout</a></li>
        </ul>

        <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    </nav>
    )
}

export default ListNav;