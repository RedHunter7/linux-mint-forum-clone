import { faRightToBracket, faUserPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AuthUserModalProps {
  id: string
}

export const AuthUserModal = (prop: AuthUserModalProps): ReactNode => {
  return (
        <dialog id={prop.id} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <FontAwesomeIcon icon={faX}/>
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <p className="py-4">You have to login to do this activity!</p>
            <div className='flex flex-row gap-x-2 float-right mr-2 mt-4'>
              <Link to={'/login'}
                className="btn btn-sm md:btn-md bg-gradient">
                <FontAwesomeIcon icon={faRightToBracket} />
                Login
              </Link>
              <Link to={'/register'}
                className="btn btn-sm md:btn-md bg-gradient">
                <FontAwesomeIcon icon={faUserPlus} />
                Signup
              </Link>
            </div>
          </div>
        </dialog>
  )
}
