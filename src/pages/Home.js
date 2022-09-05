import React, { Component } from 'react'
import MortgageRates from '../Components/MortgageRates'
import ScotmansGuide from '../Components/ScotmansGuide'
import NavBar from '../Navbar';
import Footer from '../Footer';

function Home() {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            
            <div>
                <MortgageRates></MortgageRates>
            </div>
            <div>
                <ScotmansGuide></ScotmansGuide>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;