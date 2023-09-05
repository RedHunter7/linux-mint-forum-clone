import { type ReactNode } from 'react'
import { ReactComponent as Logo } from '../../assets/linux-mint-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = (): ReactNode => {
  return (
    <nav className="navbar fixed top-0
    bg-primary text-neutral-content
    xl:px-8 md:px-4 md:py-2 z-50">
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
      <div className="flex-none gap-x-2 lg:gap-x-8">
        <Link to={'/login'} className="btn btn-ghost font-medium
        text-lg lg:text-2xl">
          <FontAwesomeIcon icon={faRightToBracket}/>
          <div className='text-base'>Log In</div>
        </Link>
        <Link to={'/leaderboard'} className="btn btn-circle btn-ghost
        text-xl lg:text-2xl">
          <FontAwesomeIcon icon={faChartSimple}/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
