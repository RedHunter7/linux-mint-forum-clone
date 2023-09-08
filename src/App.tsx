import { type ReactNode, useEffect, type MouseEventHandler } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  HomePage, LeaderboardPage, LoginPage,
  RegisterPage, ThreadDetailPage
} from './pages'
import Navbar from './components/navigations/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPreloadProcess } from './redux/is-preload/action'
import { asyncUnsetAuthUser } from './redux/auth-user/action'
import { type AppDispatch } from './redux'
import { type AccountProfileProps } from './interfaces'

const App = (): ReactNode => {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states: {
    authUser: AccountProfileProps | null
    isPreload: boolean
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onSignOut: MouseEventHandler<HTMLAnchorElement> | undefined =
  (event): void => {
    event.preventDefault()
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return null
  }

  return (
    <BrowserRouter>
      <header>
        <Navbar authUser={authUser} signOut={onSignOut}/>
      </header>
      <div className='min-h-screen mt-20 mb-28 font-sans'>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<ThreadDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Route>
        </Routes>
      </div>
      <footer className="footer footer-center p-4
      bottom-0 bg-secondary text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </BrowserRouter>
  )
}

export default App
