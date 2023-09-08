import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type AccountLoginProps } from '../../interfaces/account'

const authUserReducer = (
  authUser: AccountLoginProps | null = null,
  action: AnyAction = {
    type: '',
    payload: {
      authUser: null
    }
  }): AccountLoginProps | null => {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser
    case ActionType.UNSET_AUTH_USER:
      return null
    default:
      return authUser
  }
}

export default authUserReducer
