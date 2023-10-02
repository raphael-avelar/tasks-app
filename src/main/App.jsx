import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import '../server.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes'
import Header from '../components/header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
