import React from 'react'

const Design = () => {
  return (
    <div>
      <div className='headText'>Choose Your deloth</div>
      <div className='container'>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/outfit1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                {/* <h5 class="card-title">Red</h5> */}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/outfit/cloth" class="btn btn-primary">choose this design</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/outfit2.png" class="card-img-top" alt="..." />
            <div class="card-body">
                {/* <h5 class="card-title">Green</h5> */}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/outfit/cloth" class="btn btn-primary">choose this design</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/outfit3.png" class="card-img-top" alt="..." />
            <div class="card-body">
                {/* <h5 class="card-title">Blue</h5> */}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/outfit/cloth" class="btn btn-primary">choose this design</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/outfit4.png" class="card-img-top" alt="..." />
            <div class="card-body">
                {/* <h5 class="card-title">Nude Pink</h5> */}
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/outfit/cloth" class="btn btn-primary">choose this desig/outfit/color</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Design
