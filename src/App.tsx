import { type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import ThreadDetail from './pages/ThreadDetail'

const App = (): ReactNode => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<ThreadDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
