import React from 'react'
import './page-header-styles.css'

export default (props) => {

  return (
    <header className="page-title">
      <h2>{props.small}</h2>
    </header>
  )
}
