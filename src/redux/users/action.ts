import { type AnyAction } from '@reduxjs/toolkit'
import {
  type AccountProfileProps, type AccountRegisterProps
} from '../../interfaces'
import api from '../../utils/api'

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS'
}

const receiveUsersActionCreator = (users: AccountProfileProps): AnyAction => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

function asyncRegisterUser (account: AccountRegisterProps) {
  return async () => {
    try {
      await api.register(account)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser
}
