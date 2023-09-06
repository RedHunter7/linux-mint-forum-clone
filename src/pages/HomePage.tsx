import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ReactNode } from 'react'
import { ThreadCard } from '../components/data-displays'
import { ThreadForm } from '../components/forms'

export const HomePage = (): ReactNode => {
  return (
    <div className='w-full max-w-5xl mx-auto'>
      <button onClick={() => window.write_thread_modal.showModal()}
       className="btn btn-circle btn-lg
       bg-gradient shadow-2xl text-2xl
       fixed right-16 bottom-12">
        <FontAwesomeIcon icon={faPlus}/>
      </button>
      <dialog id='write_thread_modal' className="modal">
        <ThreadForm/>
      </dialog>
      <div className='bg-secondary w-full py-3
      md:px-8 flex justify-center text-center'>
        <h1 className='w-11/12 text-left
        md:w-full md:basis-9/12'>
          Recent Topic
        </h1>
        <div className='md:basis-3/12 hidden md:flex
        text-xs md:text-sm'>
          <div className='hidden lg:block lg:basis-1/3'>
            Author
          </div>
          <div className='md:basis-1/2 lg:basis-1/3'>
            Replies
          </div>
          <div className='md:basis-1/2 lg:basis-1/3'>
            Activity
          </div>
        </div>
      </div>
      <div className='w-full'>
        <ThreadCard/>
      </div>
    </div>
  )
}
