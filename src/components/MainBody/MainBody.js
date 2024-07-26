import React from 'react'
import './MainBody.css'

const MainBody = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active mainCard">
                    <img src='./../images/MainBody.jpg' class="d-block w-100 mainImg" alt="..." width={500} height={600} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody
