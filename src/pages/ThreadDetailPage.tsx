import { type ReactNode } from 'react'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReplyCard } from '../components/data-displays'
import { ReplyForm } from '../components/forms'

export const ThreadDetailPage = (): ReactNode => {
  return (
    <div className='w-full max-w-5xl mx-auto'>
        <div className='px-4 pt-2'>
            <h1 className='text-lg md:text-2xl font-medium'>
                How to fix the shutdown error?
            </h1>
            <div className='text-sm md:text-base md:mt-1'>
                #error #shutdown
            </div>
        </div>
        <div className='mt-8'>
            <ReplyCard/>
        </div>
        <button onClick={() => window.write_reply_modal.showModal()}
        className="btn btn-sm md:btn-md mr-6 lg:mr-0
        bg-gradient mt-4 float-right text-neutral-content
        font-semibold">
            <FontAwesomeIcon icon={faReply}/>
            Reply
        </button>
        <dialog id='write_reply_modal' className="modal">
            <ReplyForm/>
        </dialog>
    </div>
  )
}
