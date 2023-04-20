import { useState } from "react";
import NavBar from "./Navbar";
import '../styles/upload.css';
const Upload=()=>{
    const [doc,setdoc]=useState(null);
    const userid=localStorage.getItem("userid")
    function fileselect(e){
        setdoc(e.target.files[0]);
        console.log(e.target.files[0])
    }
    function uploadHandler(){
        console.log(doc)
        const fd=new FormData()
        fd.append("file",doc)
        fd.append("userid",userid)
        fetch("http://localhost:5000/upload",{
            method:"POST",
            body:fd,
            headers:{
            }
        }).then(alert("File uploaded successfully.")).catch(err=>alert("File not uploaded! 😔\n Try again"))
        setdoc(null)
    }
    return(
        <>
            <NavBar/>
        <div className="upload">
        <br></br>
        <br></br>
        <br></br>
        <div className="divider"></div>
        <label className="custom-file-upload">
        <input className="fileinput" type="file" onChange={fileselect}/>
        <p>Select File to Upload</p>
        </label>
        {doc && <p>{doc.name}</p>}
        {doc && <button className="upload-btn"onClick={uploadHandler}>upload</button>}
        </div>
        </>

    );
}
export default Upload;