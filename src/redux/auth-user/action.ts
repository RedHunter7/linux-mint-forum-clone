import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import {
  type AccountProfileProps,
  type AccountLoginProps
} from '../../interfaces/account'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER'
}

const setAuthUserActionCreator = (authUser: AccountProfileProps | null): AnyAction => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser
    }
  }
}

const unsetAuthUserActionCreator = (): AnyAction => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null
    }
  }
}

function asyncSetAuthUser (
  account: AccountLoginProps,
  onSuccess: () => void
) {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())
    try {
      const token = await api.login(account, onSuccess)
      api.putAccessToken(token)
      const authUser = await api.getOwnProfile()

      dispatch(setAuthUserActionCreator(authUser))
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
  }
}

function asyncUnsetAuthUser () {
  return (dispatch: (arg0: AnyAction) => void) => {
    dispatch(unsetAuthUserActionCreator())
    api.putAccessToken('')
  }
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser
}
