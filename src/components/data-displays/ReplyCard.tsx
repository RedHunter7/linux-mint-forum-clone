import { type ReactNode } from 'react'
import postedAt from '../../utils/postedAt'
import HTMLReactParser from 'html-react-parser'
import { type ReplyProps } from '../../interfaces'

interface ReplyCardProps {
  reply: ReplyProps
}

export const ReplyCard = (prop: ReplyCardProps): ReactNode => {
  return (
    <div className="w-full">
      <div
        className="w-full px-4 md:px-6 py-2
        bg-secondary flex items-center relative">
        <div className="avatar absolute">
          <div className="w-10 md:w-14
              rounded-full ring ring-primary
              ring-offset-base-100 ring-offset-0">
            <img src={prop.reply.owner.avatar}/>
          </div>
        </div>
        <div className="basis-2/12 md:basis-1/12"></div>
        <div
          className="basis-9/12 md:basis-10/12
            text-sm md:text-base md:ml-4 lg:ml-0"
        >
          {prop.reply.owner.name}
        </div>
        <div className="basis-1/12 text-right
            text-xs  md:text-sm">
          { postedAt(prop.reply.createdAt) }
        </div>
      </div>
      <div className="mt-4 bg-neutral-content
      p-4 md:px-8 md:pb-8 md:pt-6">
        <div className="text-justify text-xs md:text-base font-serif">
          {HTMLReactParser(prop.reply.content)}
        </div>
        {/* Like/Dislike feature will be coming soon
          <div className="join gap-x-2 mt-4 md:mt-6">
            <button className="btn btn-outline btn-success
            join-item border-2 btn-xs md:btn-sm">
              <FontAwesomeIcon icon={faThumbsUp}/>
              {prop.reply.upVotesBy.length}
            </button>
            <button className="btn btn-outline btn-error
            join-item border-2 btn-xs md:btn-sm">
              <FontAwesomeIcon icon={faThumbsDown}/>
              {prop.reply.downVotesBy.length}
            </button>
          </div>
        */}
      </div>
    </div>
  )
}
