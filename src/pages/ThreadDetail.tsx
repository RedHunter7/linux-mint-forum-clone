import { type ReactNode } from 'react'
import { faPencil, faReply, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Editor from '../components/rich-text-editor/Editor'

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
            <div className='w-full'>
                <div className='w-full px-4 md:px-6 py-2
                bg-secondary flex items-center relative'>
                    <div className="avatar placeholder absolute">
                        <div className="bg-neutral-focus
                        text-neutral-content rounded-full
                        w-10 md:w-14
                        ring ring-primary ring-offset-base-100
                        ring-offset-1">
                            <span className='md:text-lg'>JO</span>
                        </div>
                    </div>
                    <div className='basis-2/12 md:basis-1/12'></div>
                    <div className='basis-9/12 md:basis-10/12
                    text-sm md:text-base md:ml-4 lg:ml-0'>
                        John Doe
                    </div>
                    <div className='basis-1/12 text-right
                    text-xs  md:text-sm'>
                        2018
                    </div>
                </div>
                <div className='mt-4 bg-neutral-content px-4 py-4'>
                    <p className='text-justify text-xs md:text-base font-serif'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
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
                    <Editor/>
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
