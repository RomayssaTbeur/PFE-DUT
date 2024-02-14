import { useState } from "react"
import { Await } from "react-router-dom";

function Login()
{
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
     
    async function Login(){
        let item={email,password};
        let result= await fetch("http://localhost:8000/api/login",{

            method:"POST",
            
            headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
    }
    
    return(
        <>
            <div className="col-sm-6 offset-sm-3 ">
            <h1> Login page</h1>
           
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"placeholder="Email" />
            <br />

            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"placeholder="Password" />
            <br />
           
            <button onClick={Login} className="btn btn-primary">Login</button>
         </div>
        </>
    )
}
export default Login