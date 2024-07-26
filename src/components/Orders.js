import React from 'react'

const Orders = () => {
  return (
    <div>
        {/* <div class="card" style={{width:'350px'}}>
          <img src='./../images/card1.png' class="card-img-top" alt="..." style={{width:'200px'}}/>
          <div class="card-body">
            <h5 class="card-title">tokyo talkies striped frock</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Track your order</a>
          </div>
        </div> */}
        <div class="card mb-3" style={{maxWidth: '540px',marginTop:'15px',marginLeft:'15px'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./../images/card1.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">tokyo talkies striped frock</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                <a href="#" class="btn btn-primary">Track your order</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Orders
