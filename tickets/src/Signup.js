import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'
function Signup()
{
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")


async function Signup()
{
    let item={name,password,email}
    console.warn(item)

    let result = await fetch("http:/localhost:8000/api/Signup",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    })
    result= await result.json();
    console.warm("result,result")
}
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1> Signup page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"placeholder="name" />
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"placeholder="Password" />
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"placeholder="Email" />
            <br />
            <button onClick={Signup} className="btn btn-primary">Sign up</button>
        </div>
    )
}
export default Signup