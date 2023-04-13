import {useState} from 'react';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';
const SignIn=()=>{
    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
    const [errormsg,seterrormsg]=useState("");
    const navigation =useNavigate()
    const signIn=()=>{
         const hash=sha256(pass)
         console.log(hash.toString())
            fetch("http://localhost:5000/SignIn",{
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
        <h3>{errormsg}</h3>
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
        <input value={pass} type="password" onChange={(e)=>setpass(e.target.value)}/>
        <button onClick={signIn}>SignIn</button>
        <a href="/signup">signup</a>
        </>
    )
}

export default SignIn