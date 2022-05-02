import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Tasks from '../tasks/Tasks'
import About from '../about/About'
import NotFound from '../template/NotFound'

const Content = props => (
  <main className="">
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)

export default Content