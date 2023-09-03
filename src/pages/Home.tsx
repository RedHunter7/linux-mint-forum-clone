import { faPlus, faX, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Editor from '../components/rich-text-editor/Editor'

export const Home = (): ReactNode => {
  return (
    <div className='w-full max-w-5xl mx-auto'>
      <button onClick={() => window.write_thread_modal.showModal()}
       className="btn btn-circle btn-lg
       bg-gradient shadow-2xl text-2xl
       fixed right-16 bottom-12">
        <FontAwesomeIcon icon={faPlus}/>
      </button>
      <dialog id="write_thread_modal" className="modal">
            <form method="dialog" className="modal-box px-0
            w-full max-w-5xl rounded-none min-h-fit">
                 <button className="btn btn-sm btn-circle btn-ghost
                 absolute right-2 top-2">
                    <FontAwesomeIcon icon={faX}/>
                </button>
                <h3 className="font-semibold px-4">
                    Post a new topic
                </h3>
                <div className='bg-neutral-content mt-6 py-1'>
                    <input type="text" placeholder="New Topic Title Here"
                    className="input input-lg input-ghost w-full
                    text-base md:text-lg font-semibold
                    focus:bg-transparent focus:outline-0" />
                    <input type="text" placeholder="Add up to 4 tags"
                    className="input input-md input-ghost
                    w-full px-6 text-xs md:text-sm
                    focus:bg-transparent focus focus:outline-0" />
                </div>
                <div className='bg-neutral-content mt-8 py-1 mb-2'>
                    <Editor/>
                </div>
                <button className="btn btn-gradient
                btn-sm md:btn-md mr-6 mt-4 float-right
                font-semibold">
                    <FontAwesomeIcon icon={faPencil}/>
                    Post
                </button>
            </form>
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
        <div className='flex flex-row items-center
        bg-accent w-full mt-4 px-2 md:px-8 md:py-1'>
          <div className='basis-2/12 md:basis-1/12'>
            <div className="avatar placeholder">
              <div className="bg-neutral-focus
              text-neutral-content rounded-full w-12">
                <span className='md:text-lg'>JO</span>
              </div>
            </div>
          </div>
          <div className='basis-9/12 md:basis-8/12
          flex flex-col justify-around h-16'>
            <Link to='/detail'
            className='text-base md:text-lg font-medium
            link link-hover'>
              How to fix the shutdown error?
            </Link>
            <div className='font-normal flex gap-x-2'>
              <div className="badge badge-secondary
              text-xs md:text-sm">
                #error
              </div>
              <div className="badge badge-secondary
              text-xs md:text-sm">
                #shutdown
              </div>
            </div>
          </div>
          <div className='basis-1/12 md:basis-3/12 h-20
          flex flex-col md:flex-row justify-around
          items-center text-center text-xs md:text-sm'>
            <div className='hidden lg:basis-4/12 lg:block'>
              <div className="badge badge-outline text-sm">
                User-2
              </div>
            </div>
            <div className='md:basis-1/2 lg:basis-4/12'>
              <div className="badge bg-primary text-neutral-content">
                23
              </div>
            </div>
            <div className='md:basis-1/2 lg:basis-4/12'>3h</div>
          </div>
        </div>
      </div>
    </div>
  )
}
