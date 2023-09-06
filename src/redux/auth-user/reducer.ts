import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'

const authUserReducer = (authUser = null, action: AnyAction = {
  type: '',
  payload: {
    authUser: null
  }
}): any => {
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
