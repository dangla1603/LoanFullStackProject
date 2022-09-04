import './App.css';
import React from 'react';
import NavBar from './Components/Shared/Navbar';
import Firstbody from './Components/Firstbody';
import SecondBody from './Components/SecondBody';
import Footer from './Components/Shared/Footer';

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
        <SecondBody></SecondBody>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
