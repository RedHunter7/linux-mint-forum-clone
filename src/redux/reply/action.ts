import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import {
  type ReplyContentProps
} from '../../interfaces/thread'

const ActionType = {
  ADD_THREAD_REPLY: 'ADD_THREAD_REPLY'
}

const addReplyActionCreator = (reply: any): AnyAction => {
  return {
    type: ActionType.ADD_THREAD_REPLY,
    payload: {
      reply
    }
  }
}

const asyncAddReply = (reply: ReplyContentProps) => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    try {
      const postReply = await api.createReply(reply)
      dispatch(addReplyActionCreator(postReply))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export {
  ActionType,
  asyncAddReply
}
