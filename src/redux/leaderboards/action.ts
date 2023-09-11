import { type AnyAction } from '@reduxjs/toolkit'
import { type AccountScoreProps } from '../../interfaces'
import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS'
}

const receiveLeaderboardsActionCreator = (
  leaderboards: AccountScoreProps[]
): AnyAction => {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards
    }
  }
}

const asyncReceiveleaderboards = () => {
  return async (dispatch: (arg0: AnyAction) => void) => {
    dispatch(showLoading())
    try {
      const leaderboards = await api.getLeaderboards()
      dispatch(receiveLeaderboardsActionCreator(leaderboards))
    } catch (error: any) {
      throw new Error(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveleaderboards
}
