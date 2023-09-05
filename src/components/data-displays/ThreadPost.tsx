import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const ThreadPost = (): ReactNode => {
  return (
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
  )
}
