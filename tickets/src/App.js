import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './component/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Routes
import Login from './pages/Login'
import Signup from './pages/Signup'
import Addmatchs from './pages/Addmatchs';
import Updatematchs from './pages/Updatematchs';
import Addtickets from './pages/Addtickets';
import Updatetickets from './pages/Updatetickets';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import ShowTeams from './component/ShowTeams';
import Admins from './pages/Admins';
import Stadiums from './pages/Stadiums';
import UpdateStadiums from './component/UpdateStadiums';
import UpdateTeam from "./component/UpdateTeam";
import UpdateAdmin from './component/UpdateAdmin';
import Addmatchs1 from './pages/Addmatchs1';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
   <Routes> 
          <Route path="/" element={<Header cmp={Dashboard} />} />
          <Route path="/login" element={<><Header/> <Login/></>} /> 
          {/*<Route path="/signup" element={<Header cmp={Signup} />} />*/}
          <Route path="/addmatchs" element={<Header cmp={Addmatchs} />} />
          <Route path="/addmatchs1" element={<Header cmp={Addmatchs1} />} />

          <Route path="/updatematchs" element={<Header cmp={Updatematchs} />} />
          <Route path="/addtickets" element={<Header cmp={Addtickets} />} />
          <Route path="/updatetickets" element={<Header cmp={Updatetickets} />} />
          <Route path="/teams" element={<Header cmp={Teams } />} />
          <Route path="/stadiums" element={<Header cmp={Stadiums} />} />
          <Route path="/admins" element={<Header cmp={Admins} />} />

          <Route path="stadiums/updatestad/:id_stad" element={<Header cmp={UpdateStadiums} />} />
          <Route path="teams/updateteam/:id" element={<Header cmp={UpdateTeam} />} />
          <Route path="admins/updateadmin/:id" element={<Header cmp={UpdateAdmin} />} />
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
