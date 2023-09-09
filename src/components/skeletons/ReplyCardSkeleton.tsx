import { type ReactNode } from 'react'

export const ReplyCardSkeleton = (): ReactNode => {
  return (
        <div className="w-full animate-pulse">
            <div
                className="w-full h-9 bg-secondary relative">
            </div>
            <div className="mt-4 bg-neutral-content
            p-4 md:px-8 md:pb-8 md:pt-6
            flex flex-col gap-y-4">
                <div className='badge badge-sm md:badge-md
                bg-secondary w-full'></div>
                 <div className='badge badge-sm md:badge-md
                bg-secondary w-full'></div>
                 <div className='badge badge-sm md:badge-md
                bg-secondary w-full'></div>
            </div>
        </div>
  )
}
