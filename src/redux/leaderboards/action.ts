import { type AnyAction } from '@reduxjs/toolkit'
import { type AccountScoreProps } from '../../interfaces'
import api from '../../utils/api'

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
    try {
      const leaderboards = await api.getLeaderboards()
      dispatch(receiveLeaderboardsActionCreator(leaderboards))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveleaderboards
}
