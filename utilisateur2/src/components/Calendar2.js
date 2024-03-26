import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from 'bootstrap';  // Import Bootstrap JS
import './indexCalendar.css';
import { useState,useEffect } from "react";

export default function Calendar2() {
    
    const [matches, setMatches] = useState([])

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

   
    const events = matches.map((item) => ({
        title: `${item.equipe_locale.name} VS ${item.equipe_visiteur.name}`,
        start:`${item.date_matche}T${item.time_matche}`,
        
        end: item.date_matche ,
        extendedProps: {
          stad: item.stadium.name,
        },
      }));
  return (


    <>
      <div className="calendar-grid-container">
    <div className="calendar-grid-item">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "",  // Remove buttons from the left side
          center: "title",
          end: "today prev,next dayGridMonth,timeGridWeek,timeGridDay"
        }}
        height="70vh"

 
        events={events}


        eventDidMount={(info) => {
          // Function to create Popover content safely
          const createPopoverContent = () => {
            const stad = info.event?.extendedProps?.stad; // Use optional chaining
            const startTime = info.event?.startStr;

            if (!stad || !startTime) {
              return ""; // Handle missing data gracefully
            }

            return `
              <p>
                <strong>
                  Stad: ${stad}<br />
                  Time: ${startTime}
                </strong>
              </p>
            `;
          };

          const content = createPopoverContent(); // Call the function

          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",  // Optional: CSS class for styling
            content: content,
            html: true,
          });
        }}
      />
    </div>
    </div>
    </>
  )
}
