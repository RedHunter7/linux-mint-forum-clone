import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { type AccountLoginProps } from '../../interfaces/account'

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER'
}

const setAuthUserActionCreator = (authUser: object | null): AnyAction => {
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

function asyncSetAuthUser (account: AccountLoginProps) {
  return async (dispatch: (arg0: AnyAction) => void) => {
    try {
      const token = await api.login(account)
      api.putAccessToken(token)
      const authUser = await api.getOwnProfile()

      dispatch(setAuthUserActionCreator(authUser))
    } catch (error: any) {
      throw new Error(error.message)
    }
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
