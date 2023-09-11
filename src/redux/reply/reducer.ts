import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type ReplyProps } from '../../interfaces/thread'

const replyReducer = (
  reply: ReplyProps | null = null, action: AnyAction
): any => {
  switch (action.type) {
    case ActionType.ADD_THREAD_REPLY:
      return action.payload.reply
    default:
      return reply
  }
}

export default replyReducer
