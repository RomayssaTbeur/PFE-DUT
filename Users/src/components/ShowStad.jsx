import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import MapStad from "./MapStad";

export default function ShowStad() {
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

  return (
    <>
    
    <div class=" bg-gray-100 flex items-center justify-center flex flex-wrap">
    {stadiums.map((item) => (
       <div class="card ">
                     <img class='max-w-32 mx-auto' src={'http://localhost:8000/'+item.image} alt={item.name} />
                     
                     <p class="badge">Name: {item.name}</p>
                     <p>-------</p>
                     <p class="badge">Address: {item.address}</p>
       </div>
    ))}
  
    </div>
    <MapStad />
    </>
  )
}
