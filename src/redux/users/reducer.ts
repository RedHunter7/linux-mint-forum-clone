import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'

const usersReducer = (
  users: any[] = [], action: AnyAction
): any[] => {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users
    default:
      return users
  }
}

export default usersReducer
