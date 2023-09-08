import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type AccountProfileProps } from '../../interfaces'

const usersReducer = (
  users: AccountProfileProps[] = [], action: AnyAction
): AccountProfileProps[] => {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users
    default:
      return users
  }
}

export default usersReducer
