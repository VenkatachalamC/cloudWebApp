import { useState } from 'react';
import '../styles/modal.css'
function Modal({ setmodal, name, setfilename }) {
    const [rename, setrename] = useState(name);
    const userid = localStorage.getItem('userid');
    const renameHandle = () => {
        fetch('http://localhost:5000/rename', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userid,
                filename: name,
                newname: rename
            })
        }).then(res => res.json()).then(data => {
            if (data.status === "ok") {
                setfilename(rename);
            }
        })
        setmodal(false);
    }
    return (
        <div className="modal">
            <div className='components'>
                <input className='input' value={rename} onChange={(e) => setrename(e.target.value)} />
                <div className='modal-buttons'>
                    <button onClick={renameHandle} className='rename-button'>Rename</button>
                    <button onClick={() => setmodal(false)} className='cancel-button'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;