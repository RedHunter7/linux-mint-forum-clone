import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, type ReactNode } from 'react'
import { ThreadList } from '../components/data-displays'
import { ThreadForm } from '../components/forms'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '../redux'
import { asyncPopulateUsersAndThreads } from '../redux/shared/action'
import {
  type ThreadContentProps, type AccountProfileProps, type ThreadProps
} from '../interfaces'
import { asyncAddThread } from '../redux/threads/action'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const HomePage = (): ReactNode => {
  const {
    authUser = null,
    threads = [],
    users = []
  } = useSelector((states: {
    authUser: AccountProfileProps | null
    threads: ThreadProps[]
    users: AccountProfileProps[]
  }) => states)

  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    void dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread: ThreadProps) => ({
    ...thread,
    user: users.find((user: AccountProfileProps) => user.id === thread.ownerId)
  }))

  const onAddThread = (thread: ThreadContentProps): void => {
    void dispatch(asyncAddThread(thread))
    window.write_thread_modal.close()

    navigate('/')
    toast.success('Create Thread Success!!')
  }

  let writeThreadButton: ReactNode
  let writeThreadModal: ReactNode
  if (authUser !== null) {
    writeThreadButton = (
      <button onClick={() => window.write_thread_modal.showModal()}
       className="btn btn-circle btn-lg
       bg-gradient shadow-2xl text-2xl
       fixed right-16 bottom-12 z-50">
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    )

    writeThreadModal = (
      <dialog id='write_thread_modal' className="modal">
        <Toaster/>
        <div
          className="modal-box px-0
                w-full max-w-5xl min-h-fit"
        >
          <form method='dialog'>
            <button
              className="btn btn-sm btn-circle btn-ghost
                absolute right-2 top-2">
              <FontAwesomeIcon icon={faX} />
            </button>
          </form>
          <h3 className="font-semibold px-4">Post a new topic</h3>
          <ThreadForm createThread={onAddThread}/>
        </div>
      </dialog>
    )
  }

  return (
    <div className='w-full max-w-5xl mx-auto'>
      { writeThreadButton }
      { writeThreadModal }
      <ThreadList threads={threadList}/>
    </div>
  )
}
