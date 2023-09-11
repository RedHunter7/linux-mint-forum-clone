import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type ThreadLikeProps } from '../../interfaces'

const threadsReducer = (
  threads: ThreadLikeProps[] = [], action: AnyAction
): any[] => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      console.log('sadasd')
      return [action.payload.thread, ...threads]
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread: ThreadLikeProps) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...threads,
            likes: (thread.upVotesBy.includes(action.payload.userId))
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat([action.payload.userId])
          }
        }
        return thread
      })
    default:
      return threads
  }
}

export default threadsReducer
