import {useState} from 'react';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css'
import LoginNavbar from './LoginNavbar';
import LoginCont from './LoginCont';
const SignIn=()=>{
    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
    const [errormsg,seterrormsg]=useState("");
    const navigation =useNavigate()
    const signIn=()=>{
         const hash=sha256(pass)
         console.log(hash.toString())
            fetch("https://cloudserver-2iuc.onrender.com/SignIn",{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    Password:hash.toString()
                })
            }).then(res=>res.json()).then(data=>{
                if(data.status==="ok"){
                    seterrormsg("")
                    localStorage.setItem("userid",data.userid)
                    navigation("/list")
                }
                else{
                    seterrormsg(data.status)
                }})
    }
    return (
        <>
        <LoginNavbar />
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        
        <center>
        <div id='home-container'>
            <h1>Implementation Storage as a Service (STaaS) Using Cloud Network Attached Storage (NAS)</h1>
            <h3>It's a Cloud-based storage service platform for your usage, If you're consumer looking for cloud storage, Click on Get Started!</h3>
            <a href="#midLine"><button>Get Started! </button></a>
            <br></br><br></br><br></br><br></br>
        </div>
        <div id="midLine"></div>
        <div id='login-container' className='wrapper'>
            <div className='form-wrapper sign-in'>
                <div className='form'>
                <h3>{errormsg}</h3>
                    <h2>Login</h2>
                    <div className='input-group'>
                        <input type='text'
                        value={name} onChange={(e)=>setname(e.target.value)} required></input>
                        <label>Username</label>
                    </div>
                    <div className="input-group">
                        <input value={pass} type="password" onChange={(e)=>setpass(e.target.value)}
                        required></input>
                        <label for="">Password</label>
                    </div>
                    <button onClick={signIn}>Login</button>
                    <div className="signUp-link">
                        <p>Not a user? <a href="/signup"
                             className="signUpBtn-link">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
        <LoginCont />
        {/* <h3>{errormsg}</h3>
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
        <input value={pass} type="password" onChange={(e)=>setpass(e.target.value)}/>
        <button onClick={signIn}>SignIn</button>
        <a href="/signup" className='signup'>New User? Sign Up</a> */}
        </center>
        </>
    )
}

export default SignIn