import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const Home = (): ReactNode => {
  return (
    <div className='w-full max-w-5xl mx-auto'>
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
            hover:underline hover:decoration-wavy'>
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

export default Home
