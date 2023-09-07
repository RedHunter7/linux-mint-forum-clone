import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { type ThreadProps } from '../../interfaces'

interface ThreadCardProps {
  thread: ThreadProps
}

export const ThreadCard = (prop: ThreadCardProps): ReactNode => {
  const AvatarPlaceHolder = (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus
      text-neutral-content rounded-full w-12">
        <span className='md:text-lg'>JO</span>
      </div>
    </div>
  )

  return (
        <div className='flex flex-row items-center
        bg-accent w-full h-fit mt-4 px-2 md:px-8 py-2'>
          <div className='basis-2/12 md:basis-1/12'>
            <img className='rounded-full' src={prop.thread.user?.avatar} />
          </div>
          <div className='basis-9/12 md:basis-8/12
          flex flex-col justify-around'>
            <Link to={`/${prop.thread.id}`}
            className='text-sm md:text-lg font-medium
            link link-hover mb-2'>
              {prop.thread.title}
            </Link>
            <div className='font-normal flex gap-x-2'>
              <div className="badge badge-secondary
              text-xs md:text-sm">
                #{ prop.thread.category }
              </div>
            </div>
          </div>
          <div className='basis-1/12 md:basis-3/12 h-20
          flex flex-col md:flex-row justify-around
          items-center text-center'>
            <div className='md:basis-1/2 lg:basis-6/12'>
              <div className="badge bg-primary
              md:py-3 md:px-3
              text-neutral-content md:text-base">
                { prop.thread.totalComments }
              </div>
            </div>
            <div className='md:basis-1/2 lg:basis-6/12
            text-sm md:text-base'>
              3h
            </div>
          </div>
        </div>
  )
}
