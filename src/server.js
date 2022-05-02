import { createServer } from "miragejs"

import mockTasksJSON from './data/mockTasks.json'

createServer({
  routes() {
    this.namespace = 'api'

    this.get("/tasks", () => {
      if (!window.localStorage.getItem('tasks')) window.localStorage.setItem('tasks', JSON.stringify(mockTasksJSON))

      const mockTasks = JSON.parse(window.localStorage.getItem('tasks'))
      return mockTasks
    })

    this.post("/tasks", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      let tasks = JSON.parse(window.localStorage.getItem('tasks'))

      tasks.push({...attrs})
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    this.put("/tasks/:id", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      let tasks = JSON.parse(window.localStorage.getItem('tasks'))
      attrs.done = !attrs.done

      tasks = tasks.map(task => task.id === parseInt(request.params.id) ? {...attrs} : task)
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    this.delete("/tasks/:id", (schema, request) => {
      let id = request.params.id
      let tasks = JSON.parse(window.localStorage.getItem('tasks'))

      tasks.splice(tasks.findIndex(task => task.id === parseInt(id)), 1)
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    })
  }
})
