import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

export default (props) => {

  return (
    <nav className='navbar navbar-inverse bg-inverse'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='/' style={{ color: '#FFF' }}>
            <FontAwesomeIcon icon={faCalendarCheck} /> Tasks App
          </a>
        </div>

        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><a href='/'>Tarefas</a></li>
            <li><a href='/about'>Sobre</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
