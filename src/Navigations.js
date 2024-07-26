import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './components/Home'
import Requests from './components/Requests'
import Orders from './components/Orders'

class Navigations extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/requests' Component={Requests}/>
            <Route path='/orders' Component={Orders}/>
        </Routes>
      </div>
    )
  }
}

export default Navigations
