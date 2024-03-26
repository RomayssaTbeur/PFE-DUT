import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
function ShowTickets2() {

    const [tickets, setTickets] = useState([]);

    const fetchData = async () => {
        try {
          let result = await fetch("http://localhost:8000/api/listticket");
          result = await result.json();
          setTickets(result);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      useEffect(() => {
        fetchData();
    }, []);

    async function deleteOperation(id){
        console.log(id);
         let result = await fetch("http://localhost:8000/api/deleteticket/"+id,{
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
            <table class="table">
                <thead>
                    <tr>
                            <th scope="col">Id ticket</th>
                            <th scope="col">Match</th>
                            <th scope="col">Description</th>
                            <th scope="col">Vip Price</th>
                            <th scope="col">Normal Price</th>
                            <th scope="col">Stadium</th>
                            <th scope="col">date and time</th>
                            <th scope="col">image</th>
                            <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                {tickets.map((item) => (
                    <tr>
                        <th scope="row">{item.id_ticket}</th>
                        <td>{item.matche.equipe_locale.name} vs {item.matche.equipe_visiteur.name}</td>
                        <td>{item.description}</td>
                        <td>{item.priceVip}</td>
                        <td>{item.priceNormal}</td>
                        <td>{item.matche.stadium.name}</td>
                        <td>{item.matche.date_matche} at {item.matche.time_matche}</td>
                        <td><img style={{width:80}} src={'http://localhost:8000/'+item.image} alt={item.name}  /></td>
                        <td>
                            <span>
                             <button onClick={()=>deleteOperation(item.id_ticket)}  className="btn btn-danger delete">delete</button>
                             <Link to={'updatetickets/'+item.id_ticket} className="btn btn-warning">update</Link> 
                            </span>
                        </td>
                    </tr>
                 ))}
                </tbody>
            </table>
        </>
    )
}
export default ShowTickets2
