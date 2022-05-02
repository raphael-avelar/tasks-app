import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import '../server.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

import Routes from './routes'
import Menu from '../template/Menu'

const App = props => {

  return (
    <div className='container'>
      <Menu />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App