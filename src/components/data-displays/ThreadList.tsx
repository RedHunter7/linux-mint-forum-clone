import { type ReactNode } from 'react'
import { type ThreadProps } from '../../interfaces'
import { ThreadCard } from '.'

interface ThreadListProps {
  threads: ThreadProps[]
}

export const ThreadList = (prop: ThreadListProps): ReactNode => {
  return (
        <div>
            <div className='bg-secondary w-full py-3
            md:px-8 flex justify-center text-center'>
            <h1 className='w-11/12 text-left
            md:w-full md:basis-9/12'>
                Recent Topic
            </h1>
            <div className='md:basis-3/12 hidden md:flex
            text-xs md:text-sm'>
                <div className='md:basis-1/2'>
                Replies
                </div>
                <div className='md:basis-1/2'>
                Activity
                </div>
            </div>
            </div>
            <div className='w-full'>
            {
                prop.threads.map((thread) => (
                    <ThreadCard thread={thread} key={thread.id}/>
                ))
            }
            </div>
        </div>
  )
}
