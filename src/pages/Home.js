import React, { Component } from 'react'
import MortgageRates from '../components/MortgageRates'
import ScotmansGuide from '../components/ScotmansGuide'

function Home() {
    return (
        <div>
            <div>
                <MortgageRates></MortgageRates>
            </div>
            <div>
                <ScotmansGuide></ScotmansGuide>
            </div>
        </div>
    )
}

export default Home;