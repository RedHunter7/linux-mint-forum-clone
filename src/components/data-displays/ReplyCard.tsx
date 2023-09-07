import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type ReactNode } from 'react'
import { type ReplyProps } from '../../interfaces'

interface ReplyCardProps {
  reply: ReplyProps
}
export const ReplyCard = (prop: ReplyCardProps): ReactNode => {
  const AvatrPlaceHolder = (
    <div className="avatar placeholder absolute">
      <div className="bg-neutral-focus
          text-neutral-content rounded-full
          w-10 md:w-14
          ring ring-primary ring-offset-base-100
          ring-offset-1"
          >
        <span className="md:text-lg">JO</span>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div
        className="w-full px-4 md:px-6 py-2
                bg-secondary flex items-center relative"
      >
        <div className="avatar placeholder absolute">
          <div
            className="bg-neutral-focus
              text-neutral-content rounded-full
              w-10 md:w-14
              ring ring-primary ring-offset-base-100
              ring-offset-1"
          >
            <span className="md:text-lg">JO</span>
          </div>
        </div>
        <div className="basis-2/12 md:basis-1/12"></div>
        <div
          className="basis-9/12 md:basis-10/12
            text-sm md:text-base md:ml-4 lg:ml-0"
        >
          {prop.reply.owner.name}
        </div>
        <div
          className="basis-1/12 text-right
            text-xs  md:text-sm"
        >
          2018
        </div>
      </div>
      <div className="mt-4 bg-neutral-content px-4 py-4">
        <p className="text-justify text-xs md:text-base font-serif">
          {prop.reply.content}
        </p>
        <div className="flex">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <FontAwesomeIcon icon={faThumbsUp} />
            <FontAwesomeIcon icon={faThumbsUp} />
          </label>
        </div>
      </div>
    </div>
  )
}
