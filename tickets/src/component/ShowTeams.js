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
      {/*teams.map((team, index) => (
        <div className="row" key={team.id}>
          {index % 4 === 0 && index !== 0 && <div className="w-100"></div>}
          <div className="col-md-3">
            <img src={'/storage/${team.image}'} alt={team.name} className="img-thumbnail" />
            <h2>{team.name}</h2>
            <button className="btn btn-primary" onClick={() => handleUpdate(team.id)}>Update</button>
            <button className="btn btn-danger" onClick={() => handleDelete(team.id)}>Delete</button>
          </div>
        </div>
      ))*/}
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
    
  

    </>
  );
}

export default ShowTeams;