import React from 'react'
import './MainBody.css'

const MainBody = () => {
    return (
    <div>
      <div className='container'>

        <div class="carousel slide"  id="slideshow">
            
          <div class="carousel-indicators">
            <button data-bs-target="#slideshow" data-bs-slide-to="0" class="active"></button>
            <button data-bs-target="#slideshow" data-bs-slide-to="1"></button>
            <button data-bs-target="#slideshow" data-bs-slide-to="2"></button>
            <button data-bs-target="#slideshow" data-bs-slide-to="3"></button>
          </div>
                

          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="../images/dress.jpg" class="d-block" alt="..." />
              <div class="carousel-caption">
                <h3>Dress you desire</h3>
                <p>lorem</p>
              </div>
            </div>

            <div class="carousel-item"  data-bs-interval="1000">
              <img src="./images/fabric.jpg" class="d-block" alt="..." />
            </div>

            <div class="carousel-item" data-bs-interval="1000">
              <img src="./images/dress-color.jpg" class="d-block" alt="..." />
            </div>

            <div class="carousel-item" data-bs-interval="1000">
              <img src="./images/dress-size.jpg" class="d-block" alt="..." />
            </div>

            {/* controls */}
            <button class="carousel-control-prev" data-bs-target="#slideshow" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" data-bs-target="#slideshow" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
  </div>
  )
}


export default MainBody
