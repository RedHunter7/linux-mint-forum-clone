import { type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Leaderboard, Login, Register, ThreadDetail } from './pages'
import Navbar from './components/navigations/Navbar'

const App = (): ReactNode => {
  return (
    <BrowserRouter>
      <header>
        <Navbar/>
      </header>
      <div className='mt-20 font-sans'>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/detail" element={<ThreadDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
