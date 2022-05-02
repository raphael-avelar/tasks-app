import React from 'react'
import Button from '../template/Button'

export default (props) => {
  const renderRows = () => {
    return props.tasks.map(task => (
      <tr key={task.id} className={task.done ? 'row-marked-done' : 'row-marked-pending'}>
        <td className={task.done ? 'marked-done' : ''}>{task.description}</td>
        <td>{task.done ? 'Concluída' : 'Pendente'}</td>

        <td>
          <Button kind="success" icon="check" onClick={() => props.handleMarkToggleTask(task)} hide={task.done ? 1 : 0} />
          <Button kind="warning" icon="undo" onClick={() => props.handleMarkToggleTask(task)} hide={!task.done ? 1 : 0} />
          <Button kind="danger" icon="trash" onClick={() => props.handleRemoveTask(task)} />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='table-actions'>Status</th>
          <th className='table-actions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
