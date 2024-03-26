import { useState } from "react"
import {useNavigate} from "react-router-dom";
function Login()
{
    
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

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
        console.log(item);
        console.log(result);

        if (result.ok) {
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
      
            // Mettre à jour l'état loggedIn
            setLoggedIn(true);
          } else {
            // Gérer le cas où la connexion échoue
            console.log("La connexion a échoué.");
            // Afficher un message d'erreur ou effectuer d'autres actions nécessaires
          }

          if (loggedIn) {
            /*return <Redirect to="/dashboard" />;*/
           /* window.location.href = "/dashboard";*/
            navigate("/");
          }
      /*  result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));*/
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