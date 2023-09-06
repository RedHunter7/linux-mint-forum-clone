import { type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  HomePage, LeaderboardPage, LoginPage,
  RegisterPage, ThreadDetailPage
} from './pages'
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
            <Route index element={<HomePage />} />
            <Route path="/detail" element={<ThreadDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
