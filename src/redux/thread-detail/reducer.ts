import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type ThreadLikeProps } from '../../interfaces'

const threadDetailReducer = (
  threadDetail: ThreadLikeProps | null = null, action: AnyAction
): any => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.talkDetail
    case ActionType.CLEAR_THREAD_DETAIL:
      return null
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      if (threadDetail === null) return null
      return {
        ...threadDetail,
        likes: (threadDetail.likes.includes(action.payload.userId))
          ? threadDetail.likes.filter((id: string) => id !== action.payload.userId)
          : threadDetail.likes.concat(action.payload.userId)
      }
    default:
      return threadDetail
  }
}

export default threadDetailReducer
