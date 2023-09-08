import { type AnyAction } from '@reduxjs/toolkit'
import { ActionType } from './action'
import { type AccountScoreProps } from '../../interfaces'

const leaderboardsReducer = (
  leaderboards: AccountScoreProps[] = [], action: AnyAction
): AccountScoreProps[] => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboards
    default:
      return leaderboards
  }
}

export default leaderboardsReducer
