import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './header'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Routes
import Login from './Login'
import Signup from './Signup'
import Addmatchs from './Addmatchs';
import Updatematchs from './Updatematchs';
import Addtickets from './Addtickets';
import Updatetickets from './Updatetickets';
import Dashboard from './Dashboard';
import Teams from './Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
   <h1></h1>
   <Routes> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addmatchs" element={<Addmatchs />} />
          <Route path="/updatematchs" element={<Updatematchs />} />
          <Route path="/addtickets" element={<Addtickets />} />
          <Route path="/updatetickets" element={<Updatetickets />} />
          <Route path="/teams" element={<Teams />} />
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
