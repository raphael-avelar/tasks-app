import React, { useState } from 'react'

import Button from '../../button/Button'
import './tasks-form-styles.css'

export default (props) => {
  const [description, setDescription] = useState('')

  const handleAddTask = () => {
    if (!description) return alert('Campo obrigatório!')

    props.handleAddTaks(description)
    setDescription('')
  }

  return (
    <div className="tasks-form">
      <div className="tasks-input">
        <input
          className="tasks-input"
          type="text"
          placeholder="Adicione uma tarefa"
          onKeyUp={e => e.key === 'Enter' ? handleAddTask() : ''}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className="tasks-button">
        <Button icon="plus" onClick={handleAddTask} style={{ backgroundColor: '#BB86FC' }}/>
      </div>
    </div>
  )
}
