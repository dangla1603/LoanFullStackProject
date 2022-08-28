import './App.css';
import React from 'react';
import NavBar from './Components/Navbar';
import Firstbody from './Components/Firstbody';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <Firstbody></Firstbody>
      </div>
      <div>
        <img src="/images/image2.jpg"/>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
