import { useState, type ReactNode } from 'react'
import { TextEditor } from '../data-inputs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { type ThreadContentProps } from '../../interfaces'
import useInput from '../../hooks/useInput'
import toast from 'react-hot-toast'

interface ThreadFormProps {
  createThread: (props: ThreadContentProps) => void
}

export const ThreadForm = (prop: ThreadFormProps): ReactNode => {
  const [title, onTitleChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const [content, setContent] = useState('')

  const onSubmit = (): void => {
    if (title.length < 5) {
      toast.error('Title must at least 6 characters')
      return
    }

    if (category.length === 0) {
      toast.error('You must insert the category')
      return
    }

    if (content.length <= 20) {
      console.log('type content')
      console.log(typeof content)
      toast.error('Content must at least 20 characters')
      return
    }

    prop.createThread({ title, category, body: content })
  }

  return (
    <>
      <div className="bg-neutral-content mt-6 py-1">
        <input
          type="text"
          placeholder="New Topic Title Here"
          value={title}
          onChange={onTitleChange}
          className="input input-lg input-ghost w-full
              text-base md:text-lg font-semibold
              focus:bg-transparent focus:outline-0"
        />
        <input
          type="text"
          placeholder="Insert Thread Topic Here"
          value={category}
          onChange={onCategoryChange}
          className="input input-md input-ghost
              w-full px-6 text-xs md:text-sm
              focus:bg-transparent focus focus:outline-0"
        />
      </div>
      <div className="bg-neutral-content mt-8 py-1 mb-2">
        <TextEditor value={content} onChange={setContent} />
      </div>
      <button
        onClick={onSubmit}
        className="btn btn-sm md:btn-md
              bg-gradient mr-6 mt-4
              float-right font-semibold"
      >
        <FontAwesomeIcon icon={faPencil} />
        Post
      </button>
    </>
  )
}
