import '../styles/deactivate.css';
import { useNavigate } from 'react-router-dom';
const Deactivate=()=>{
    const navigate=useNavigate();
    const userid=localStorage.getItem("userid");

    const deactivate=()=>{
        fetch("https://cloudserver-2iuc.onrender.com/deactivate",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uid:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==="ok"){
                localStorage.removeItem("userid");
                alert("Account Deactivation Successful");
                navigate('/');
            }
        })
    }

    return(
        <div className='megacontainer'>
        <div className="container">
            <img src='https://i.gifer.com/8iE9.gif' />
            <h3>Warning!</h3>
            <h3 className="heading">Account Deactivation</h3>
            <div className='messg'>
            <p className="content">Deactivating Account will delete your Account permanently and also the files linked to your Account.</p>
            <p className='content'>Are you sure you want to deactivate?</p>
            </div>
            
            <div className="button-grp">
                <button className="deactivate-btn" onClick={deactivate}>Deactivate</button>
                <button className="cancel-btn" onClick={()=>navigate("/list")}>Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default Deactivate;