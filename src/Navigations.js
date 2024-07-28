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
import Measure from './components/measure/Measure'
import Payment from './components/payment/Payment'
import Success from './components/success/Success'

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
            <Route path='/measure' Component={Measure}/>
            <Route path='/payment' Component={Payment}/>
            <Route path='/success' Component={Success}/>
        </Routes>
      </div>
    )
  }
}

export default Navigations
