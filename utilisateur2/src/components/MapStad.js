import React from 'react';
import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
export default function MapStad() {

    const [stadiums, setStadiums] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:8000/api/listStadium');
          const data = await response.json();
          setStadiums(data);
        }
    
        fetchData();
      }, []);
      const position = [51.505, -0.09];
  return (
  <>
   




  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
  
      attribution='&copy; <a href="https://www.maptiler.org/copyright">MapTiler</a> contributors'
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=biNoM59IvMsWq1e43B0q'
     // url='https://api.maptiler.com/data/e294b098-eed2-4b2e-ae37-f8ed750337fe/features.json?key=biNoM59IvMsWq1e43B0q'
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

  
  </>
  )
}
