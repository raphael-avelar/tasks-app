import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  const options = [
    { to: '/', label: 'Tarefas' },
    { to: '/about', label: 'Sobre' }
  ]

  return (
    <nav className="navbar navbar-inverse bg-inverse">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand" style={{ color: '#FFF' }}>
            <div className="nav-logo">
              <FontAwesomeIcon icon={faCalendarCheck} size="lg" />
              <span className="nav-title">Tasks App</span>
            </div>

            <ul className="nav navbar-nav">
              {options.map(opt => (
                <li key={opt.label}>
                  <Link to={opt.to} style={{ fontSize: '15px' }}>{opt.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default memo(Header)
