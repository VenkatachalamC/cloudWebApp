import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/viewdata.css';
import Modal from "./modal";
const ViewData = () => {
    const location = useLocation();
    const url = location.state.url;
    const [filename, setfilename] = useState(location.state.filename);
    const type = location.state.type;
    const [modal, setmodal] = useState(false)
    var ele;
    switch (type) {
        case 'application': ele = <img src={require('../images/doc.png')} />; break;
        case 'image': ele = <img src={url} />; break;
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
        <div className="container">
            <h1>{filename}</h1>
            {ele}
            <div className="button-container">
                <button className="downloadbutton" onClick={() => { download(filename) }}>download</button>
                <button className="renamebutton" onClick={() => setmodal(true)}>Rename</button>
            </div>
            {modal && <Modal setmodal={setmodal} name={filename} setfilename={setfilename} />}
        </div>
    )
}
export default ViewData;