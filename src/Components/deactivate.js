import '../styles/deactivate.css';
import { useNavigate } from 'react-router-dom';
const Deactivate=()=>{
    const navigate=useNavigate();
    const userid=localStorage.getItem("userid");

    const deactivate=()=>{
        fetch("http://localhost:5000/deactivate",{
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
            <h3 className="heading">Account Deactivation</h3>
            <p className="content">Deactivating Account will delete your Account permanently and also the files linked to your Account.Are you sure you want to deactivate?</p>
            <div className="button-grp">
                <button className="deactivate-btn" onClick={deactivate}>Deactivate</button>
                <button className="cancel-btn" onClick={()=>navigate("/list")}>cancel</button>
            </div>
        </div>
        </div>
    )
}

export default Deactivate;