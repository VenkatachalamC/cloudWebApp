import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/navbar.css'
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
        <div className="navbar">
        <button onClick={appdownload}>Download Apk</button>
        <button onClick={()=>navigation('/list')} className="items">Home</button>
        <button onClick={()=>navigation('/upload')} className="items">upload</button>
        <button onClick={logoutHandler} className="items">Logout</button>
        </div>
    )
}
export default NavBar;