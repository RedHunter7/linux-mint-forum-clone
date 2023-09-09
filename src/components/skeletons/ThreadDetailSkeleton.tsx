import { type ReactNode } from 'react'
import { ReplyCardSkeleton } from '.'

export const ThreadDetailSkeleton = (): ReactNode => {
  return (
        <div className='w-full max-w-5xl mx-auto'>
        <div className='px-4 pt-2 flex flex-col'>
            <div className='badge badge-lg bg-secondary w-4/5'>
            </div>
            <div className='badge bg-secondary w-24 mt-3 md:mt-5'>
            </div>
        </div>
        <div className='mt-8'>
            <ReplyCardSkeleton/>
        </div>
    </div>
  )
}
