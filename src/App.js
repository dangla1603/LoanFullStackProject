import './App.css';
import React from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer';
import Login from './pages/Login';

function App() {
  return (
    <div className="fixed">
      <div>
          <NavBar/>
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <Login/>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
