import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard, Todo } from './pages'
import { Navbar } from './components'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/todos" element={<Todo />} />
    </Routes>
  </BrowserRouter>
)
