import { useState } from 'react';
import { useEffect } from 'react';
import Signup from '../pages/Signup'
import Model from "react-modal"
function Admins(){
    const [admins, setAdmins] = useState("");
    const[visible,setVisible]=useState(false);
  
  const fetchData = async () => {
    try {
      let result = await fetch("http://localhost:8000/api/listAdmin");
      result = await result.json();
      setAdmins(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  async function deleteOperation(id){
    let result = await fetch("http://localhost:8000/api/deleteAdmin/"+id,{
          method:"DELETE"
    });
      result = await result.json();
      
   fetchData();
  }
  async function updateOperation(id){

  }

  
    return(
      <>
       

       <button onClick={()=>setVisible(true) } className="btn btn-success">Add Admin</button>
       <Model style={{overlay:{backgroundColor:""},content:{width:"200 px",height:"500 px"}}} isOpen={visible} onRequestClose={()=>setVisible(false) }  >
         <button onClick={()=>setVisible(false) } className="btn btn-danger">Close</button>
          <Signup />
         
       </Model>


       <table className="table table-dark table-striped">
    <thead>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>operations</th>
        </tr>
    </thead>
    <tbody>
        {admins && admins.map(admin => (
            <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td><span >
                    <button onClick={()=>deleteOperation(admin.id)} className="btn btn-danger delete">delete</button> 
                    
                    <button onClick={()=>updateOperation(admin.id)} className="btn btn-warning">update</button> 
                    </span>
                </td>
            </tr>
        ))}
    </tbody>
</table>
      </>
    )
}
export default Admins