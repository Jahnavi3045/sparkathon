import React from 'react'
import './Payment.css'

const Payment = () => {
  return (
    <div>
      <h3 className='headText' style={{position:'relative',top:'20px'}}>Payment Gateway</h3>
      <div>
        <div className='bodyText'>Estimated Price: $XXX</div>
        <div className='bodyText'>Amount to be paid : $XXX</div>
        <div className='bodyText'>Pay through:</div>
        <div className='paymentOptions'>
            <img src='././../images/payment1.png'alt=''/>
            <img src='././../images/payment2.png'alt=''/>
            <img src='././../images/payment3.png'alt=''/>
        </div>
      </div>
      <a href='/success'><button type="button" class="btn btn-warning" style={{position:'relative',left:'50%',marginTop:'30px'}}>Confirm Payment</button></a>
    </div>
  )
}

export default Payment
