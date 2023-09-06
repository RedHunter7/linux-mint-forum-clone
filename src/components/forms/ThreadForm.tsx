import { type ReactNode } from 'react'
import { TextEditor } from '../data-inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPencil } from '@fortawesome/free-solid-svg-icons'

export const ThreadForm = (): ReactNode => {
  return (
    <form
      method="dialog"
      className="modal-box px-0
            w-full max-w-5xl rounded-none min-h-fit"
    >
      <button
        className="btn btn-sm btn-circle btn-ghost
                 absolute right-2 top-2"
      >
        <FontAwesomeIcon icon={faX} />
      </button>
      <h3 className="font-semibold px-4">Post a new topic</h3>
      <div className="bg-neutral-content mt-6 py-1">
        <input
          type="text"
          placeholder="New Topic Title Here"
          className="input input-lg input-ghost w-full
                    text-base md:text-lg font-semibold
                    focus:bg-transparent focus:outline-0"
        />
        <input
          type="text"
          placeholder="Add up to 4 tags"
          className="input input-md input-ghost
                    w-full px-6 text-xs md:text-sm
                    focus:bg-transparent focus focus:outline-0"
        />
      </div>
      <div className="bg-neutral-content mt-8 py-1 mb-2">
        <TextEditor />
      </div>
      <button
        className="btn btn-sm md:btn-md
            bg-gradient mr-6 mt-4
            float-right font-semibold"
      >
        <FontAwesomeIcon icon={faPencil} />
        Post
      </button>
    </form>
  )
}
