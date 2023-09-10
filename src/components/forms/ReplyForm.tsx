import { type ReactNode } from 'react'
import { TextEditor } from '../data-inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPencil } from '@fortawesome/free-solid-svg-icons'

export const ReplyForm = (): ReactNode => {
  return (
    <form
      method="dialog"
      className="modal-box px-0
            w-full max-w-5xl e min-h-fit"
    >
      <button
        className="btn btn-sm btn-circle btn-ghost
                 absolute right-2 top-2"
      >
        <FontAwesomeIcon icon={faX} />
      </button>
      <h3 className="font-semibold px-4">Post a new reply</h3>

      <div className="bg-neutral-content mt-8 py-1 mb-2">
        <TextEditor />
      </div>
      <button
        className="btn btn-sm md:btn-md
          mr-6 mt-4 bg-gradient float-right"
      >
        <FontAwesomeIcon icon={faPencil} />
        Post
      </button>
    </form>
  )
}
