
import { useState } from "react";
import sha256 from 'crypto-js/sha256';
import { useNavigate } from "react-router-dom";
import LoginNavbar from "./LoginNavbar";

const SignUp=()=>{
    const [username,setusername]=useState("");
    const [pass,setpass]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const [errormsg,seterrormsg]=useState("")
    const navigate=useNavigate()
    const signupHandler=()=>{
        if(pass!==confirmpass){
            seterrormsg("passwords did not match");
            return;
        }
        const hash=sha256(pass);
        fetch("http://localhost:5000/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:username,
                Password:hash.toString()
            })
        }).then(res=>res.json()).then(
            data=>{
                if(data.status==="ok"){
                    navigate('/')
                }
                else{
                    seterrormsg(data.status)
                }
            }
        )

    }
    return(
        <>
        <LoginNavbar />
        <center>
        <div id='login-container' className='wrapper'>
            <div className='form-wrapper sign-in'>
                <div className='form'>
                <h3>{errormsg}</h3>
                    <h2>Sign Up</h2>
                    <div className='input-group'>
                        <input type='text'
                        value={username} onChange={(e)=>{setusername(e.target.value)}}
                         required></input>
                        <label>Username</label>
                    </div>
                    <div class="input-group">
                        <input value={pass} type="password" onChange={(e)=>{setpass(e.target.value)}}
                        required></input>
                        <label for="">Password</label>
                    </div>
                    <div class="input-group">
                        <input value={confirmpass} type="password" onChange={(e)=>{setconfirmpass(e.target.value)}}
                        required></input>
                        <label for="">Confirm Password</label>
                    </div>
                    <button onClick={signupHandler}>Sign Up</button>
                </div>
            </div>
        </div>
        </center>
        {/* <input value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input value={pass} type="password" onChange={(e)=>{setpass(e.target.value)}}/>
        <input value={confirmpass} type="password" onChange={(e)=>{setconfirmpass(e.target.value)}}/>
        <button onClick={signupHandler}>Sign up</button> */}
        </>
    );
}

export default SignUp;