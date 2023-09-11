import { type MouseEventHandler, type ReactNode } from 'react'
import { ReactComponent as Logo } from '../../assets/linux-mint-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { type AccountProfileProps } from '../../interfaces'

interface NavbarProps {
  authUser: AccountProfileProps | null
  signOut: MouseEventHandler<HTMLAnchorElement> | undefined
}
const Navbar = (prop: NavbarProps): ReactNode => {
  let outlet = (
   <>
    <Link to={'/register'} className="btn btn-ghost font-medium
        text-lg lg:text-2xl">
          <FontAwesomeIcon icon={faUserPlus}/>
          <div className='text-base hidden md:block'>
            Sign Up
          </div>
    </Link>
     <Link to={'/login'} className="btn btn-ghost font-medium
        text-lg lg:text-2xl">
          <FontAwesomeIcon icon={faRightToBracket}/>
          <div className='text-base hidden md:block'>
            Log In
          </div>
    </Link>
   </>
  )

  if (prop.authUser != null) {
    outlet = (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={prop.authUser.avatar} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content
        mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-accent-content">
          <li><a onClick={prop.signOut}>Logout</a></li>
        </ul>
      </div>
    )
  }

  return (
    <nav className="navbar fixed top-0
    bg-primary text-neutral-content
    xl:px-8 md:px-4 md:py-2 z-40">
      <div className="flex-none">
        <Link to={'/'} className="btn btn-outline btn-circle
        btn-secondary border-0">
          <Logo width={40} height={40} className='w-8 h-8'/>
        </Link>
      </div>
      <div className="flex-1 lg:ml-2">
        <Link to={'/'} className="btn btn-ghost normal-case
        text-lg lg:text-2xl font-medium">
          <div className='hidden lg:block'>
            Linux Mint
          </div>
          Forums
        </Link>
      </div>
      <div className="flex-none gap-x-2 lg:gap-x-6">
        { outlet }
        <Link to={'/leaderboard'} className="btn btn-circle btn-ghost
        text-xl lg:text-2xl">
          <FontAwesomeIcon icon={faChartSimple}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
