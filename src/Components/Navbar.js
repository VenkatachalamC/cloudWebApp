import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/navbar.css'
import ListNav from "./ListNav";
const NavBar=()=>{
    const navigation=useNavigate()
    const logoutHandler=()=>{
        localStorage.removeItem("userid");
        navigation("/")
    }
    function appdownload(){
        const a=document.createElement('a');
        a.href='logo192.png';
        a.setAttribute("download","favicon.png");
        document.body.append(a);
        a.click();
        a.remove();
    }
    return (
        <>
        <nav className='nav'>
        <span>Cloud Storage</span>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a onClick={()=>navigation('/list')} className="items">Files</a></li>
            <li><a onClick={()=>navigation('/upload')} className="items">Upload</a></li>
            <li><a onClick={appdownload} className="items">Download App</a></li>
            <li><a onClick={logoutHandler} className="items">Logout</a></li>
        </ul>

        <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    </nav>
        {/* <div className="navbar">
        <button onClick={appdownload}>Download Apk</button>
        <button onClick={()=>navigation('/list')} className="items">Home</button>
        <button onClick={()=>navigation('/upload')} className="items">upload</button>
        <button onClick={logoutHandler} className="items">Logout</button>
        </div> */}
        </>
        
    )
}
export default NavBar;