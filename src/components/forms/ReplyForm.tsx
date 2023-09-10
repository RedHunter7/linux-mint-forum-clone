import { useState, type ReactNode } from 'react'
import { TextEditor } from '../data-inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPencil } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import { type ReplyProps } from '../../interfaces'

interface ReplyFormProps {
  createReply: (props: ReplyProps) => void
}

export const ReplyForm = (prop: ReplyFormProps): ReactNode => {
  const [content, setContent] = useState('')

  const onSubmit = (): void => {
    if (content.length <= 20) {
      console.log(typeof content)
      toast.error('Content must at least 20 characters')
      // return
    }

    //  prop.createThread({ title, category, body: content })
  }

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
        <TextEditor value={content} onChange={setContent} />
      </div>
      <button onSubmit={onSubmit}
        className="btn btn-sm md:btn-md
          mr-6 mt-4 bg-gradient float-right"
      >
        <FontAwesomeIcon icon={faPencil} />
        Post
      </button>
    </form>
  )
}
