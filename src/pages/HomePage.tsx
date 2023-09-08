import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, type ReactNode } from 'react'
import { ThreadList } from '../components/data-displays'
import { ThreadForm } from '../components/forms'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '../redux'
import { asyncPopulateUsersAndThreads } from '../redux/shared/action'
import { type AccountProfileProps, type ThreadProps } from '../interfaces'

export const HomePage = (): ReactNode => {
  const {
    threads = [],
    users = []
  } = useSelector((states: {
    threads: ThreadProps[]
    users: AccountProfileProps[]
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread: ThreadProps) => ({
    ...thread,
    user: users.find((user: AccountProfileProps) => user.id === thread.ownerId)
  }))

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <button onClick={() => window.write_thread_modal.showModal()}
       className="btn btn-circle btn-lg
       bg-gradient shadow-2xl text-2xl
       fixed right-16 bottom-12 z-50">
        <FontAwesomeIcon icon={faPlus}/>
      </button>
      <dialog id='write_thread_modal' className="modal">
        <ThreadForm/>
      </dialog>
      <ThreadList threads={threadList}/>
    </div>
  )
}
