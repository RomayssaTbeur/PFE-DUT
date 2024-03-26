import React from 'react';
import { CCard, CCardImage, CCardBody, CButton } from '@coreui/react'; // Import de @coreui/react
import TicketImage from './image2/Football world cup Canda vs Morocco football match scoreboard broadcast.jpeg';
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
function TicketCard2() {

    const [tickets, setTickets] = useState([]);
    const [oneTicket, setOneTicket] = useState([]);

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
    <div className="flex justify-center items-center m-2">
      <CCard style={{ width: '30rem' }} className="mb-4 shadow-lg">
        {/* Partie gauche avec l'image */}
        <CCardImage orientation="top" src={'http://localhost:8000/'+item.image} alt={item.name} />

        {/* Partie droite avec les détails */}
        <CCardBody className="text-center">
          {/* Paragraphe avec la mention "A partir de" et le prix */}
          <div className="text-black-700 dark:text-black-400 font-semibold mb-4 text-left">
            <h3>the price starts with</h3>
            <span className="text-4xl font-bold text-black-800 dark:text-black-300">{item.priceNormal}$</span>
          </div>

          {/* Trait de soulignement */}
          <div className="w-100 border-t border-gray-800 dark:border-gray-300 mb-2"></div>

          {/* Bouton Acheter */}
          <CButton  href="#" >
          <Link to={`/tickets/${item.id_ticket}`} className="btn btn-primary">Buy your ticket</Link>
          
            
          </CButton>
        </CCardBody>
      </CCard>
    </div>
    ))}
    </>
  );
}

export default TicketCard2;
