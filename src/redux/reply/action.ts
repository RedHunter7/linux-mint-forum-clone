import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import {
  type ReplyContentProps
} from '../../interfaces/thread'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

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

const asyncAddReply = (
  reply: ReplyContentProps,
  onSuccess: () => void
) => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())
    try {
      const postReply = await api.createReply(reply, onSuccess)
      dispatch(addReplyActionCreator(postReply))
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  asyncAddReply
}
