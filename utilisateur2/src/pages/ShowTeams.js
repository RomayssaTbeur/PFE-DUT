import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import TableTeam from "../components/TableTeam";

function ShowTeams() {
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
  return (
    <>
    <h2 className=" text-white mx-auto m-4 px-3 py-1 w-1/2  text-xl rounded-full " style={{backgroundColor:"#b00b1e"}}>The teams that are participating in the world cup</h2>
    <div className=" bg-gray-100 flex items-center justify-center flex flex-wrap">
    {teams.map((item) => (
       <div className="card2">
                     <img className='max-w-20 mx-auto' src={'http://localhost:8000/'+item.image} alt={item.name}  />
                     
                     <span class="badge2" style={{color:'black'}}>{item.name}</span>
                     
       </div>
    ))}
  
       

    </div>
  
    </>
  )
}
export default ShowTeams
