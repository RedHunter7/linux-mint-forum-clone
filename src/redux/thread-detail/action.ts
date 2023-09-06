import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL'
}

const receiveThreadDetailActionCreator = (
  threadDetail: any
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
    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

function asyncToogleLikeTalkDetail () {
  return async (dispatch: (
    arg0: AnyAction) => void,
  getState: () => { authUser: any, talkDetail: any }
  ) => {
    const { authUser, talkDetail } = getState()
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleLikeThread(talkDetail.id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToogleLikeTalkDetail
}
