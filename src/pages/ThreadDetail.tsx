import { type ReactNode } from 'react'
import { faPencil, faReply, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextEditor } from '../components/data-inputs'
import { ThreadReply } from '../components/data-displays'

export const ThreadDetail = (): ReactNode => {
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
            <ThreadReply/>
        </div>
        <button onClick={() => window.write_reply_modal.showModal()}
        className="btn btn-sm md:btn-md mr-6 lg:mr-0
        bg-gradient mt-4 float-right text-neutral-content
        font-semibold">
            <FontAwesomeIcon icon={faReply}/>
            Reply
        </button>
        <dialog id="write_reply_modal" className="modal">
            <form method="dialog" className="modal-box px-0
            w-full max-w-5xl rounded-none min-h-fit">
                 <button className="btn btn-sm btn-circle btn-ghost
                 absolute right-2 top-2">
                    <FontAwesomeIcon icon={faX}/>
                </button>
                <h3 className="font-semibold px-4">
                    Post a new reply
                </h3>
                <div className='bg-neutral-content mt-8 py-1 mb-2'>
                    <TextEditor/>
                </div>
                <button className="btn bg-gradient
                btn-sm md:btn-md mr-6 mt-4 float-right
                font-semibold">
                    <FontAwesomeIcon icon={faPencil}/>
                    Post
                </button>
            </form>
        </dialog>
    </div>
  )
}
