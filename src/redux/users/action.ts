import { type AnyAction } from '@reduxjs/toolkit'
import {
  type AccountProfileProps, type AccountRegisterProps
} from '../../interfaces'
import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS'
}

const receiveUsersActionCreator = (users: AccountProfileProps[]): AnyAction => {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

function asyncRegisterUser (
  account: AccountRegisterProps,
  onSuccess: () => void
) {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())
    try {
      await api.register(account, onSuccess)
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser
}
