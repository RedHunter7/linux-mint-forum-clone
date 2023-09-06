import { type AnyAction } from '@reduxjs/toolkit'
import {
  type ThreadInfoProps, type ThreadContentProps
} from '../../interfaces'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD'
}

const receiveThreadsActionCreator = (threads: any): AnyAction => {
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

const asyncAddThread = (thread: ThreadContentProps) => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    try {
      const postThread = await api.createThread(thread)
      dispatch(addThreadActionCreator(postThread))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

const asyncToogleLikeThread = (threadId: any) => {
  return async (
    dispatch: (arg0: AnyAction) => void,
    getState: () => { authUser: any }) => {
    const { authUser } = getState()
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }))

    try {
      await api.toggleLikeThread(threadId)
    } catch (error: any) {
      dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }))
      throw new Error(error.message)
    }
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
