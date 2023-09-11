import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import {
  type ReplyContentProps,
  type ThreadDetailProps
} from '../../interfaces/thread'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  ADD_THREAD_REPLY: 'ADD_THREAD_REPLY'
}

const receiveThreadDetailActionCreator = (
  threadDetail: ThreadDetailProps
): AnyAction => {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

const clearThreadDetailActionCreator = (): AnyAction => {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
    payload: {}
  }
}

const addReplyActionCreator = (reply: any): AnyAction => {
  console.log('asfad')
  return {
    type: ActionType.ADD_THREAD_REPLY,
    payload: {
      reply
    }
  }
}

const toggleLikeThreadDetailActionCreator = (userId: any): AnyAction => {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

const asyncReceiveThreadDetail = (threadId: any) => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(clearThreadDetailActionCreator())
    dispatch(showLoading())
    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
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

function asyncToogleLikeThreadDetail () {
  return async (dispatch: (
    arg0: AnyAction) => void,
  getState: () => { authUser: any, threadDetail: any }
  ) => {
    dispatch(showLoading())

    const { authUser, threadDetail } = getState()
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleLikeThread(threadDetail.id)
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addReplyActionCreator,
  toggleLikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddReply,
  asyncToogleLikeThreadDetail
}
