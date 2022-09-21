import React from 'react'
import MortgageRates from '../components/MortgageRates'
import ScotmansGuide from '../components/ScotmansGuide'
import LockitStaff from './LockitStaff'

function Home() {
    return (
        <div>
            <div>
                <MortgageRates></MortgageRates>
            </div>
            <div>
                <ScotmansGuide></ScotmansGuide>
            </div>
            <div>
                <LockitStaff></LockitStaff>
            </div>
        </div>
    )
}

export default Home;