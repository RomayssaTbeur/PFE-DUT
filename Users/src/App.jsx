import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import ShowTeams from './components/ShowTeams';
import ShowStad from './components/ShowStad';
import MapStad from './components/MapStad';
import Header from './components/header';

function App() {
  

  return (
    <>
     <ToastContainer theme='colored' ></ToastContainer>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/teams' element={<ShowTeams/>}></Route>
        <Route path='/stadiums' element={<ShowStad/>}></Route>
        <Route path='/map' element={<MapStad/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
