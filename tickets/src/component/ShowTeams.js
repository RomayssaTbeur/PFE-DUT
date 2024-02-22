import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";


function ShowTeams() {
  const[visible,setVisible]=useState(false);
  const [teams, setTeams] = useState([]);

  const fetchData = async () => {
    try {
      let result = await fetch("http://localhost:8000/api/listTeam");
      result = await result.json();
      setTeams(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);




  const deleteOperation = async (id) => {
        let result = await fetch("http://localhost:8000/api/equipe/"+id,{
              method:"DELETE"
        });
          result = await result.json();
          if(result){
             console.log("success");
          }else{
            console.log("failed");
          }
    fetchData();
  };

  const updateOperation = async (id) => {
    
  };


  return (
    <>
    
      <div className="container">
      <table class="table table-dark table-hover">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Image</th>
      <th>Operations</th>
    </tr>
  </thead>
  <tbody>
    {teams.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td><img style={{width:60}} src={'http://localhost:8000/'+item.image} alt={item.name}  /></td>
        <td><span >
                    <button onClick={()=>deleteOperation(item.id)} className="btn btn-danger delete">delete</button> 
                    
                    <Link to={'updateteam/'+item.id} className="btn btn-warning">update</Link> 
                    </span></td>
      </tr>
    ))}
  </tbody>
</table>
</div>
    {/** 
      {teams.map((item) => (
        <div className="row" key={item.id}>
          
          <div className="col-4">
            <img src={'http://localhost:8000/'+item.image} alt={item.name} className="img-thumbnail" />
            <h6>{item.name}</h6>
            <button className="btn btn-primary" onClick={() => updateOperation (item.id)}>Update</button>
            <button className="btn btn-danger" onClick={() => deleteOperation(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    
    */}
  

    </>
  );
}

export default ShowTeams;