import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import doc from '../images/doc.png'
import '../styles/listdata.css'

const Bin=()=>{
    const [binfiles, setbinfiles] = useState([])
    const userid = localStorage.getItem("userid");
    const navigation = useNavigate();
    const fetchData = () => {
        fetch(`https://cloudserver-2iuc.onrender.com/getbin/${userid}`)
            .then(res => res.json())
            .then(data => { setbinfiles(data); })
    }
    useEffect(() => {
        fetchData();
    }, [userid, binfiles])
    function DeleteHandle(name, id) {
        fetch("https://cloudserver-2iuc.onrender.com/permanentdelete", {
            method: "DELETE",
            body: JSON.stringify({
                name: name,
                uid: userid
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => { })
        const f = binfiles.filter((item) => item._id !== id && item.name !== name)
        setbinfiles(f);
    }
    const RestoreHandle = (name) => {
        fetch('https://cloudserver-2iuc.onrender.com/restore',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uid:userid,
                fname:name
            })
        }).then(res=>res.json())
        .then(data=>{})

    }
    const renderItem = (item) => {
        const url = `https://cloudserver-2iuc.onrender.com/${item.fileName}`
        const myArray = item.filetype.split("/");
        var fname;
        const showDocument = (filename) => {
            navigation('/view', {
                state: {
                    url: url,
                    type: myArray[0],
                    filename: filename,
                }
            })
        }
        switch (myArray[0]) {
            case "image": fname = <img className="img" src={url} alt="" />; break;
            case "video": fname = <video className="img" controls muted><source src={url} type={item.filetype} /></video>; break;
            case "application": fname = <img className="imgdoc" src={doc} alt="" />; break;
        }
        return (
            <div key={item._id} className="list" >
                <div onClick={() => showDocument(item.fileName)} className="clickable-container">
                    {fname}
                    <div className="fileNameContainer"><p className="fileName">{item.fileName}</p></div>
                    
                </div>
                <div className="buttonContainer">
                    <button onClick={() => RestoreHandle(item.fileName)} className="download-btn">Restore</button>
                    <button onClick={() => { DeleteHandle(item.fileName, item._id) }} className="delete-btn">Delete</button>
                </div>
            </div>
        )

    }
    return (
        <div className="container">
            <div style={{ height: "100px" }}></div>
            <NavBar />
            {binfiles.length === 0 ? <><img src='forbidden.png' className="noFiles" /><h1 className="noFilesh1">Bin is empty 🗑️</h1></>: binfiles.map(renderItem)}
        </div>
    )
}
export default Bin;