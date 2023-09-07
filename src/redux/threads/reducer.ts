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
      return [action.payload.thread, ...threads]
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread: ThreadLikeProps) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...threads,
            likes: (thread.likes.includes(action.payload.userId))
              ? thread.likes.filter((id) => id !== action.payload.userId)
              : thread.likes.concat([action.payload.userId])
          }
        }
        return thread
      })
    default:
      return threads
  }
}

export default threadsReducer