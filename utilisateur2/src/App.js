import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './pages/home';
import Matchs from './pages/Matchs';
import Tickets from './pages/Tickets';

import ShowTeams from './pages/ShowTeams';
import ShowStad from './pages/ShowStad';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import Calendar from './components/Calendar';

import MatchsCards2 from './components/MatchsCards2';
import Calendar2 from './components/Calendar2';
import TicketCard2 from './components/TicketCard2';
import TicketDetail from './pages/TicketDetail';
function App() {
  return (
    <>
    <ToastContainer theme='colored' ></ToastContainer>
    <Router>
      <div className="App">
        <Header />
       

       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matchs" element={<Matchs />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/teams" element={<ShowTeams />} />
          <Route path="/stadiums" element={<ShowStad />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/tickets/:id" element={<TicketDetail />}  />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
