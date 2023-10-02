import React from 'react'
import Button from '../../button/Button'
import './tasks-list-styles.css'

export default (props) => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <div className="list-container">
        <div className="description-title">Descrição</div>
        <div className="status-title">Status</div>
        <div className="actions-title">Ações</div>
      </div>

      {props.tasks.map(task => (
        <div key={task.id} className='list-container'>
          <div className="status-circle" style={{ backgroundColor: task.done ? '#5CB85C' : '#F0AD4E' }} />

          <div className="description-list">
            <span>{task.description}</span>
          </div>

          <div className="status-list" style={{ color: task.done ? '#5CB85C' : '#F0AD4E' }}>
            {task.done ? 'Concluída' : 'Pendente'}
          </div>

          <div className="actions-list">
            <Button kind="success" icon="check" onClick={() => props.handleMarkToggleTask(task)} hide={task.done ? 1 : 0} />
            <Button kind="warning" icon="undo" onClick={() => props.handleMarkToggleTask(task)} hide={!task.done ? 1 : 0} />
            <Button kind="danger" icon="trash" onClick={() => props.handleRemoveTask(task)} />
          </div>
        </div>
      ))}
    </div>
  )
}
