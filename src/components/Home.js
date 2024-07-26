import React from 'react'

import MainBody from './MainBody/MainBody'

const Home = () => {
  return (
    <div>
        <MainBody />
        {/* <img src="./../images/MainBody.jpg" class="img-fluid" alt="..." height={100}></img> */}
        <a href='/outfit/category'><button type="button" class="btn btn-secondary">create your closet</button></a>
    </div>
  )
}

export default Home
