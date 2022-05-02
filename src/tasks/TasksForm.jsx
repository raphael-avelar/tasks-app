import React, { useState } from 'react'

import Grid from '../template/Grid'
import Button from '../template/Button'

export default (props) => {
  const [description, setDescription] = useState('')

  const handleAddTask = () => {
    setDescription('')
    props.handleAddTaks(description)
  }

  return (
    <div role="form" className="task-form">
      <Grid cols="10 11">
        <input
          id="description"
          type="text"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onKeyUp={e => e.key === 'Enter' ? handleAddTask() : ''}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Grid>

      <Grid cols="2 1">
        <Button kind="primary" icon="plus" onClick={handleAddTask}/>
      </Grid>
    </div>
  )
}
