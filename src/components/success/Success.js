import React from 'react'
import './Success.css'

const Success = () => {
  return (
    <div>
      <h4 style={{marginLeft:'20px',marginTop:'30px'}} className='textHead'>Your Request has been submitted....</h4>
      <div class="card" style={{marginTop:'100px',marginLeft:'100px',marginRight:'200px'}}>
        {/* <div class="card-header">
            Thanks for placing your request
        </div> */}
        <div class="card-body" >
            <h5 class="card-title">Thanks for placing your request</h5>
            <p class="card-text">Our workers are on their way for it to weave..</p>
            <a href="/" class="btn btn-primary">Go to home page</a>
        </div>
      </div>
    </div>
  )
}

export default Success
