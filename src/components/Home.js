import React from 'react'

import MainBody from './MainBody/MainBody'

const Home = () => {
  return (
    <div>
        <MainBody />
        <a href='/outfit/design'><button type="button" class="btn btn-secondary" style={{position:'relative',left:'50%',marginTop:'40px'}}>create your closet</button></a>
    </div>
  )
}

export default Home
