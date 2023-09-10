import { useEffect, type ReactNode, type MouseEventHandler } from 'react'
import { faReply, faRightToBracket, faUserPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReplyCard } from '../components/data-displays'
import { ReplyForm } from '../components/forms'
import { type AppDispatch } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { asyncReceiveThreadDetail } from '../redux/thread-detail/action'
import {
  type AccountProfileProps, type ReplyProps, type ThreadDetailProps
} from '../interfaces'
import { ThreadDetailSkeleton } from '../components/skeletons'

export const ThreadDetailPage = (): ReactNode => {
  const { id } = useParams()
  const {
    authUser = null,
    threadDetail = null
  } = useSelector((states: {
    authUser: AccountProfileProps | null
    threadDetail: ThreadDetailProps | null
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (threadDetail === null) {
    return (
      <ThreadDetailSkeleton/>
    )
  }

  const mainThread: ReplyProps = {
    id: threadDetail.id,
    content: threadDetail.body,
    createdAt: threadDetail.createdAt,
    owner: threadDetail.owner,
    upVotesBy: threadDetail.upVotesBy,
    downVotesBy: threadDetail.downVotesBy
  }

  const onClickReplyButton: MouseEventHandler<HTMLButtonElement> | undefined =
  (event): void => {
    event.preventDefault()
    if (authUser !== null) {
      window.write_reply_modal.showModal()
    } else {
      window.auth_user_modal.showModal()
    }
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

        <button onClick={onClickReplyButton}
        className="btn btn-sm md:btn-md mr-6 lg:mr-0
        bg-gradient mt-4 float-right">
            <FontAwesomeIcon icon={faReply}/>
            Reply
        </button>
        <dialog id='write_reply_modal' className="modal">
            <ReplyForm/>
        </dialog>
        <dialog id="auth_user_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <FontAwesomeIcon icon={faX}/>
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <p className="py-4">You have to login to do this activity!</p>
            <div className='flex flex-row gap-x-2 float-right mr-2 mt-4'>
              <Link to={'/login'}
                className="btn btn-sm md:btn-md bg-gradient">
                <FontAwesomeIcon icon={faRightToBracket} />
                Login
              </Link>
              <Link to={'/register'}
                className="btn btn-sm md:btn-md bg-gradient">
                <FontAwesomeIcon icon={faUserPlus} />
                Signup
              </Link>
            </div>
          </div>
        </dialog>
    </div>
  )
}
