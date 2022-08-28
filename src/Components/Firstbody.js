import React from 'react'
import './Firstbody.css';
function Firstbody() {

    //TODO:
    //1) make the box for input field of Loan
    //2) add buttons "Start Application" & "Get Quote" from the Mortage Rates box
  return (
    <div className='body-container'> 
        <div class='center'>
            <h1 class='first-text'>Relax,And Let us get you better deal</h1>
            <p> Mortgage expert in refinance, loan purchase</p>
        </div>
        <form id="form" action="" method="">
            <label for="amount">Loan Amount</label>
            <div class="flex">
                <span class="currency">$</span>
                <input id="amount" name="amount" type="text" maxlength="15"/>               
            </div>
            <label for="amount">Property Value</label>
            <div class="flex">
                <span class="currency">$</span>
                <input id="amount" name="amount" type="text" maxlength="15"/>
            </div>
            

        </form>
    </div>
  )
}

export default Firstbody