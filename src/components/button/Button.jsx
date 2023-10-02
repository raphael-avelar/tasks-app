import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './button-styles.css'

library.add(fas)

export default (props) => {
  if (props.hide) return null

  return (
    <button
      className={'btn btn-' + props.kind}
      {...props}
    >
      <FontAwesomeIcon icon={['fas', props.icon]} />
    </button>
  )
}
