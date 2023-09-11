import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface FormModalProps {
  id: string
  title: string
  children: ReactNode
}

export const FormModal = (prop: FormModalProps): ReactNode => {
  return (
        <dialog id={prop.id} className="modal">
          <Toaster/>
          <div
            className="modal-box px-0
              w-full max-w-5xl min-h-fit">
            <form method='dialog'>
              <button
                className="btn btn-sm btn-circle btn-ghost
                  absolute right-2 top-2">
                <FontAwesomeIcon icon={faX} />
              </button>
            </form>
            <h3 className="font-semibold px-4">
                {prop.title}
            </h3>
            {prop.children}
          </div>
        </dialog>
  )
}
