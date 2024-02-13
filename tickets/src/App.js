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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
   <h1></h1>
   <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Addmatchs" element={<Addmatchs />} />
          <Route path="/Updatematchs" element={<Updatematchs />} />
          <Route path="/Addtickets" element={<Addtickets />} />
          <Route path="/Updatetickets" element={<Updatetickets />} />

  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
