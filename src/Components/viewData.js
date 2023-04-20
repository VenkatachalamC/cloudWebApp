import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/viewdata.css';
import Modal from "./modal";
import NavBar from "./Navbar";
const ViewData = () => {
    const location = useLocation();
    const url = location.state.url;
    const [filename, setfilename] = useState(location.state.filename);
    const type = location.state.type;
    const [modal, setmodal] = useState(false)
    var ele;
    switch (type) {
        case 'application': ele = <img className="thumbnail" src={require('../images/doc.png')} />; break;
        case 'image': ele = <img className="thumbnail" src={url} />; break;
        case 'video': ele = <video controls><source src={url} type="video/mp4" /></video>; break;
    }
    function download(filename) {
        fetch(url).then(res => res.blob()).then(
            blob => {
                const downloadurl = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = downloadurl
                link.setAttribute('download', filename);
                document.body.appendChild(link)
                link.click();
                link.remove();
            })
    }
    return (
        <>
        <NavBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="container">
        
            <h1>{filename}</h1>
            {ele}
            <div className="button-container">
                <button className="downloadbutton" onClick={() => { download(filename) }}>Download</button>
                <button className="renamebutton" onClick={() => setmodal(true)}>Rename</button>
            </div>
            {modal && <Modal setmodal={setmodal} name={filename} setfilename={setfilename} />}
        </div>
        </>
    )
}
export default ViewData;