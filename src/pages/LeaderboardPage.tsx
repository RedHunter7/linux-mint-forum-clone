import { useEffect, type ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '../redux'
import { asyncReceiveleaderboards } from '../redux/leaderboards/action'
import { type AccountScoreProps } from '../interfaces'
import { LeaderboardTable } from '../components/data-displays'

export const LeaderboardPage = (): ReactNode => {
  const {
    leaderboards = []
  } = useSelector((states: {
    leaderboards: AccountScoreProps[]
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncReceiveleaderboards())
  }, [dispatch])

  return (
    <div>
        <LeaderboardTable leaderboard={leaderboards}/>
    </div>
  )
}
