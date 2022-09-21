import './App.css';
import React from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer';
import Login from './pages/Login';
import LockitStaff from './pages/LockitStaff';

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (    
    <div>
      <div><NavBar/></div>
      <div>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/LockitStaff" element={<LockitStaff />}/>
        </Routes>
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
