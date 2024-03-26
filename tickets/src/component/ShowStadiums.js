import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from 'axios';
function ShowStadiums() {
    const [stadiums, setStadiums] = useState([]);

    const fetchData = async () => {
        try {
          let result = await fetch("http://localhost:8000/api/listStadium");
          result = await result.json();
          setStadiums(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

    useEffect(() => {
        fetchData();
    }, []);
    
    async function deleteOperation(id){
        console.log(id);
        let result = await fetch("http://localhost:8000/api/stadium/"+id,{
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

    return (
        <>

            <div className="container">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Capacite</th>
                            <th>Image</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stadiums.map((item) => (
                            <tr>
                                <td>{item.id_stad}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.capacite}</td>
                                <td><img style={{width:70,height:60}} src={'http://localhost:8000/'+item.image} alt={item.name}  /></td>
                                <td><span >
                                    <button onClick={()=>deleteOperation(item.id_stad)}  className="btn btn-danger delete">delete</button>
                                    
                                    <Link to={'updatestad/'+item.id_stad} className="btn btn-warning">update</Link> 
                                    
                                </span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ShowStadiums 