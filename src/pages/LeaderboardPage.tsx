import { useEffect, type ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch } from '../redux'
import { asyncReceiveleaderboards } from '../redux/leaderboards/action'
import { type AccountScoreProps } from '../interfaces'
import { LeaderboardTable } from '../components/data-displays/LeaderboardTable'

export const LeaderboardPage = (): ReactNode => {
  const {
    leaderboards = null
  } = useSelector((states: {
    leaderboards: AccountScoreProps[] | null
  }) => states)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    void dispatch(asyncReceiveleaderboards())
  }, [dispatch])

  console.log(leaderboards)

  return (
    <div>
        <LeaderboardTable leaderboard={leaderboards}/>
    </div>
  )
}
