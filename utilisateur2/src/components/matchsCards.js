import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Button, Image } from 'react-bootstrap';
import brazilFlag from './imageFlags/brazil.png';
import belgiumFlag from './imageFlags/belgium.png';
import moroccoFlag from './imageFlags/morocco.png';
import franceFlag from './imageFlags/france.png';
import swedenFlag from './imageFlags/sweden.png';
import palestineFlag from './imageFlags/palestine.png';
import russiaFlag from './imageFlags/russia.png';
import canadaFlag from './imageFlags/canada.png';
import koreaFlag from './imageFlags/korea.png';
function MatchsCards({ eventName, description, keywords, flag1, flag2, stadium, date, time }) {
  return (
    <>
    <Card className="mb-3 shadow">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image src={flag1} alt="Team 1" className="w-25 mr-2" />
          <span className="h1 font-weight-bold"><strong>VS</strong></span>
          <Image src={flag2} alt="Team 2" className="w-25 ml-2" />
        </div>
        <div className="text-right">
          <Card.Title><strong>{eventName}</strong></Card.Title>
          <p className="h5"><strong>Stadium:</strong> {stadium}</p>
          <p className="h5"><strong>Date:</strong> {date}</p>
          <p className="h5"><strong>Time:</strong> {time}</p>
          <div>
            {keywords.map((keyword, index) => (
              <span key={index} className="badge badge-info mr-1">{keyword}</span>
            ))}
          </div>
          <Link to="/tickets"  className="h5" style={{ backgroundColor: '', borderColor: '' ,color: 'green'}}><b>Acheter tickets</b></Link>
        </div>
      </Card.Body>
    </Card>

    

    </>
  );
}

export default function App() {
  const matchsData = [
    {
      eventName: 'Match de football - Brésil vs Belgique',
      description: 'Un match de football passionnant entre le Brésil et la Belgique.',
      keywords: ['Sport', 'Football', 'Match'],
      flag1: canadaFlag,
      flag2: moroccoFlag,
      stadium: 'Stade 1',
      date: '01/12/2030',
      time: '19:00',
      
    },
    {
      eventName: 'Match de football - Maroc vs France',
      description: 'Un match de football passionnant entre le Maroc et la France.',
      keywords: ['Sport', 'Football', 'Match'],
      flag1: brazilFlag,
      flag2: koreaFlag,
      stadium: 'Stade 2',
      date: '02/04/2024',
      time: '16:00',
    },
    {
      eventName: 'Match de football - Suède vs Palestine',
      description: 'Un match de football passionnant entre la Suède et la Palestine.',
      keywords: ['Sport', 'Football', 'Match'],
      flag1: swedenFlag,
      flag2: palestineFlag,
      stadium: 'Stade 3',
      date: '03/04/2024',
      time: '18:00',
    },
    {
      eventName: 'Match de football - Russie vs Canada',
      description: 'Un match de football passionnant entre la Russie et le Canada.',
      keywords: ['Sport', 'Football', 'Match'],
      flag1: russiaFlag,
      flag2: canadaFlag,
      stadium: 'Stade 4',
      date: '04/04/2024',
      time: '20:00',
    },
    // Ajoutez ici les données pour les autres matchs
  ];

  return (
    <div className="container">
      <h1 className="my-4">Matchs</h1>
      <div className="row">
        {matchsData.map((match, index) => (
          <div key={index} className="col-lg-12 col-md-6 mb-4">
            <MatchsCards {...match} />
          </div>
        ))}
      </div>
    </div>
  );
}
