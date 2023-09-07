import { type AnyAction } from '@reduxjs/toolkit'
import api from '../../utils/api'
import { receiveThreadsActionCreator } from '../threads/action'
import { receiveUsersActionCreator } from '../users/action'

const asyncPopulateUsersAndThreads = () => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    try {
      const users = await api.getAllUsers()
      const threads = await api.getAllThreads()

      dispatch(receiveUsersActionCreator(users))
      dispatch(receiveThreadsActionCreator(threads))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { asyncPopulateUsersAndThreads }
