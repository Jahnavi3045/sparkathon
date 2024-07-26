import React from 'react'
import './Outfit.css'

const Outfit = () => {
  return (
    <div>
      <div className='headText'>Choose Your Category</div>
      <div className='container'>
        <div class="card" style={{width: '18rem'}}>
            <img src="./../images/outfit1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="./../images/outfit1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="./../images/outfit1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="./../images/outfit1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Outfit
