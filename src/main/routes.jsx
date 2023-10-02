import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Tasks from '../pages/Tasks'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const Content = () => (
  <main>
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)

export default Content
