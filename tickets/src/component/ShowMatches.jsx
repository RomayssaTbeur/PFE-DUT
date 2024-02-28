import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
function ShowMatches(){
    const [matches, setMatches] = useState([]);

    const fetchData = async () => {
        try {
          let result = await fetch("http://localhost:8000/api/listmatch");
          result = await result.json();
          setMatches(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);

    async function deleteOperation(id){
       console.log(id);
        let result = await fetch("http://localhost:8000/api/deletematche/"+id,{
              method:"DELETE"
        });
          result = await result.json();
          if(result){
             console.log("success");
          }else{
            console.log("failed");
          }
       fetchData();
      }
    return(
        
        <>
       
       <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Team 1</th>
                            <th>Team 2</th>
                            <th>Stadium</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((item) => (
                            <tr>
                                <td>{item.id_match}</td>
                                <td>{item.equipe_locale.name}</td>
                                <td>{item.equipe_visiteur.name}</td>
                                <td>{item.stadium.name}</td>
                                <td>{item.date_matche}</td>
                                <td>{item.time_matche}</td>
                                <td><span >
                                    <button onClick={()=>deleteOperation(item.id_match)}  className="btn btn-danger delete">delete</button>
                                    
                                    <Link to={'updatematchs/'+item.id_match} className="btn btn-warning">update</Link> 
                                    
                                </span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ShowMatches