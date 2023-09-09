import { type ReactNode } from 'react'

export const ThreadCardSkeleton = (): ReactNode => {
  return (
    <div className='bg-accent w-full h-fit mt-4 px-2 md:px-8 py-2'>
      <div className='animate-pulse flex flex-row items-center gap-x-2'>
        <div className='basis-2/12 md:basis-1/12'>
          <div className="avatar">
            <div className="w-12 md:w-16 rounded-full bg-secondary">
            </div>
          </div>
          </div>
          <div className='basis-9/12 md:basis-8/12
          flex flex-col justify-around'>
            <div className='badge mb-2 w-full bg-secondary w-full'></div>
            <div className='font-normal flex gap-x-2'>
              <div className="badge badge-secondary
              text-xs md:text-sm bg-secondary w-24">
              </div>
            </div>
          </div>
          <div className='basis-1/12 md:basis-3/12 h-20
          flex flex-col md:flex-row justify-around
          items-center text-center'>
            <div className='md:basis-1/2 lg:basis-6/12'>
              <div className="badge bg-secondary w-2/5"></div>
            </div>
            <div className='md:basis-1/2 lg:basis-6/12'>
              <div className='badge w-2/5 bg-secondary'></div>
            </div>
          </div>
      </div>
    </div>
  )
}
