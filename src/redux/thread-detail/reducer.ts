import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type ThreadDetailProps } from '../../interfaces'

const threadDetailReducer = (
  threadDetail: ThreadDetailProps | null = null, action: AnyAction
): any => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail
    case ActionType.CLEAR_THREAD_DETAIL:
      return null
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      if (threadDetail === null) return null
      return {
        ...threadDetail,
        likes: (threadDetail.upVotesBy.includes(action.payload.userId))
          ? threadDetail.upVotesBy.filter((id: string) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat(action.payload.userId)
      }
    default:
      return threadDetail
  }
}

export default threadDetailReducer
