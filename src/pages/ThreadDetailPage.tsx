import { useEffect, type ReactNode } from 'react'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReplyCard } from '../components/data-displays'
import { ReplyForm } from '../components/forms'
import { type AppDispatch } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncReceiveThreadDetail } from '../redux/thread-detail/action'
import { type ReplyProps, type ThreadDetailProps } from '../interfaces'

export const ThreadDetailPage = (): ReactNode => {
  const { id } = useParams()
  const {
    threadDetail = null
  } = useSelector((states: {
    threadDetail: ThreadDetailProps | null
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (threadDetail === null) {
    return null
  }

  const mainThread: ReplyProps = {
    id: threadDetail.id,
    content: threadDetail.body,
    createdAt: threadDetail.createdAt,
    owner: threadDetail.owner,
    upVotesBy: threadDetail.upVotesBy,
    downVotesBy: threadDetail.downVotesBy
  }

  return (
    <div className='w-full max-w-5xl mx-auto'>
        <div className='px-4 pt-2'>
            <h1 className='text-lg md:text-2xl font-medium'>
                {threadDetail.title}
            </h1>
            <div className='text-sm md:text-base md:mt-1'>
                #{threadDetail.category}
            </div>
        </div>
        <div className='mt-8 flex flex-col gap-y-6 md:gap-y-10'>
            <ReplyCard reply={mainThread}/>
            {
              threadDetail.comments.map((comment) => (
                <ReplyCard key={comment.id} reply={comment}/>
              ))
            }
        </div>
        <button onClick={() => window.write_reply_modal.showModal()}
        className="btn btn-sm md:btn-md mr-6 lg:mr-0
        bg-gradient mt-4 float-right text-neutral-content
        font-semibold">
            <FontAwesomeIcon icon={faReply}/>
            Reply
        </button>
        <dialog id='write_reply_modal' className="modal">
            <ReplyForm/>
        </dialog>
    </div>
  )
}
