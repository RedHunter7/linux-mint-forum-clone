import { useState, type ReactNode } from 'react'
import { TextEditor } from '../data-inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'

interface ReplyFormProps {
  createReply: (props: string) => void
}

export const ReplyForm = (prop: ReplyFormProps): ReactNode => {
  const [content, setContent] = useState('')

  const onSubmit = (): void => {
    if (content.length <= 20) {
      toast.error('Content must at least 20 characters')
      return
    }

    console.log(content)
    prop.createReply(content)
  }

  return (
    <>
      <div className="bg-neutral-content mt-8 py-1 mb-2">
        <TextEditor value={content} onChange={setContent} />
      </div>
      <button onClick={onSubmit}
        className="btn btn-sm md:btn-md
          mr-6 mt-4 bg-gradient float-right"
      >
        <FontAwesomeIcon icon={faPencil} />
        Post
      </button>
    </>
  )
}
