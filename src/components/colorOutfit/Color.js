import React from 'react'
import './color.css'

const Color = () => {
  return (
    <div>
      <div className='headText'>Choose Your color</div>
      <div className='container'>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/red.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Red</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/measure" class="btn btn-primary">choose this color</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/green.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Green</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/measure" class="btn btn-primary">choose this color</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/blue.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Blue</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/measure" class="btn btn-primary">choose this color</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/pink.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Nude Pink</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/measure" class="btn btn-primary">choose this color</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Color
