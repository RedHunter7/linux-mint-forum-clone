import { type AnyAction } from '@reduxjs/toolkit'
import {
  type ThreadInfoProps, type ThreadContentProps, type ThreadProps
} from '../../interfaces'
import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD'
}

const receiveThreadsActionCreator = (threads: ThreadProps[]): AnyAction => {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

const addThreadActionCreator = (thread: any): AnyAction => {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

const toggleLikeThreadActionCreator = (threadInfo: ThreadInfoProps): AnyAction => {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: threadInfo
  }
}

const asyncAddThread = (
  thread: ThreadContentProps,
  onSuccess: () => void
) => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())

    try {
      const postThread = await api.createThread(thread, onSuccess)
      dispatch(addThreadActionCreator(postThread))
    } catch (error: any) {
      throw new Error(error.message)
    }

    dispatch(hideLoading())
  }
}

const asyncToogleLikeThread = (threadId: any) => {
  return async (
    dispatch: (arg0: AnyAction) => void,
    getState: () => { authUser: any }) => {
    const { authUser } = getState()
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }))
    dispatch(showLoading())

    try {
      await api.toggleLikeThread(threadId)
    } catch (error: any) {
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }))
      throw new Error(error.message)
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  asyncAddThread,
  asyncToogleLikeThread
}
