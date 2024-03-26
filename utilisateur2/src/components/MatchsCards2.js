import React from 'react'
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { Card, Button, Image } from 'react-bootstrap';

 function MatchsCards2() {

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
  return (
    <>
    
    {tickets.map((item) => (

<Card className="mb-3 shadow">
<Card.Body className="d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
    <Image src={'http://localhost:8000/'+item.matche.equipe_locale.image} alt={item.matche.equipe_locale.name} className="w-25 mr-2" />
    <span className="h1 font-weight-bold"><strong>VS</strong></span>
    <Image src={'http://localhost:8000/'+item.matche.equipe_visiteur.image} alt={item.matche.equipe_visiteur.name} className="w-25 ml-2" />
  </div>
  <div className="text-right">Match de football - {item.matche.equipe_locale.name} vs {item.matche.equipe_visiteur.name}
    <Card.Title><strong>Match de football - {item.matche.equipe_locale.name} vs {item.matche.equipe_visiteur.name}</strong></Card.Title>
    <p className="h5"><strong>Stadium:</strong> {item.matche.stadium.name}</p>
    <p className="h5"><strong>Date:</strong> {item.matche.date_matche}</p>
    <p className="h5"><strong>Time:</strong> {item.matche.time_matche}</p>
   




    <Link to="/tickets"  className="h5" style={{ backgroundColor: '', borderColor: '' ,color: 'green'}}><b>Acheter tickets</b></Link>
  </div>
</Card.Body>
</Card>
    ))}

    </>
  )
}
export default MatchsCards2