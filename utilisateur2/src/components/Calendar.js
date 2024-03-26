import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from 'bootstrap';  // Import Bootstrap JS
import './indexCalendar.css';

function Calendar() {
  const events = [
    {
      title: "Morocco VS France",
      start: "2024-03-09T12:00:00",
      end: "2024-03-09T14:00:00",
      extendedProps: {  // Add extendedProps for stadium name
        stad: "Mohammed6"
      }
    },
    {
      title: "Spain VS Portugal",
      start: "2024-03-15T18:30:00",
      end: "2024-03-15T20:30:00",
      extendedProps: {
        stad: "Santiago Bernabéu"
      }
    },
    {
      title: "Brazil VS Argentina",
      start: "2024-04-01T20:00:00",
      end: "2024-04-01T22:00:00",
      extendedProps: {
        stad: "Maracanã"
      }
    },
    // Add more matches as needed
  ];

  return (
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
  );
}

export default Calendar;