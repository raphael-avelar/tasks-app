import axios from 'axios'
import React, { useEffect, useState } from 'react'

import PageHeader from '../components/page-header/PageHeader'
import TasksForm from '../components/tasks/tasks-form/TasksForm'
import TasksList from '../components/tasks/tasks-list/TasksList'

export default () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    refreshTaskList()
  }, [])

  const refreshTaskList = () => {
    axios.get('/api/tasks').then(response => {
      setTasks(response.data)
    })
  }

  const handleAddTaks = (description) => {
    const task = {
      id: new Date().getTime(),
      description: description,
      todo: false
    }

    axios.post('/api/tasks', task).then(() => {
      refreshTaskList()
    })
  }

  const handleRemoveTask = (task) => {
    axios.delete(`/api/tasks/${task.id}`).then(() => {
      refreshTaskList()
    })
  }

  const handleMarkToggleTask = (task) => {
    axios.put(`/api/tasks/${task.id}`, task).then(() => {
      refreshTaskList()
    })
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TasksForm handleAddTaks={handleAddTaks} />

      <PageHeader name="Tarefas" small="Lista" />
      <TasksList
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
        handleMarkToggleTask={handleMarkToggleTask}
      />
    </div>
  )
}
