import React from 'react'

const Cloth = () => {
  return (
    <div>
      <div className='headText'>Choose Your cloth</div>
      <div className='container'>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/cloth1.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Velvet</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/outfit/color" class="btn btn-primary">choose this cloth</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/cloth2.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Cotton</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/outfit/color" class="btn btn-primary">choose this cloth</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/cloth3.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Rayon</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/outfit/color" class="btn btn-primary">choose this cloth</a>
            </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
            <img src="././../images/cloth4.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Satin</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="/outfit/color" class="btn btn-primary">choose this cloth</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cloth
