import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './components/Home'
import Requests from './components/Requests'
import Orders from './components/Orders'
import Outfit from './components/outfit/Outfit'
import Color from './components/colorOutfit/Color'
import Design from './components/DesignOutfit/Design'
import Cloth from './components/ClothOutfit/Cloth'
import MainBody from './components/MainBody/MainBody'

class Navigations extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/requests' Component={Requests}/>
            <Route path='/orders' Component={Orders}/>
            <Route path='/outfit/category' Component={Outfit}/>
            <Route path='/outfit/design' Component={Design}/>
            <Route path='/outfit/cloth' Component={Cloth}/>
            <Route path='/outfit/color' Component={Color}/>
            <Route path='/mainbody' Component={MainBody}/>
        </Routes>
      </div>
    )
  }
}

export default Navigations
