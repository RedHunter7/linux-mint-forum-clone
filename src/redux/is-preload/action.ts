import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { setAuthUserActionCreator } from '../auth-user/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

const setIsPreloadActionCreator = (isPreload: boolean): AnyAction => {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload
    }
  }
}

const asyncPreloadProcess = () => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())
    try {
      // preload process
      const authUser = await api.getOwnProfile()
      dispatch(setAuthUserActionCreator(authUser))
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null))
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false))
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess
}
