import './App.css';
import React from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer';
import Login from './pages/Login';
import LockitStaff from './pages/LockitStaff';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    
    <div className="fixed">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/LockitStaff" element={<LockitStaff />}/>
      </Routes>
      
    </div>
  );
}

export default App;
