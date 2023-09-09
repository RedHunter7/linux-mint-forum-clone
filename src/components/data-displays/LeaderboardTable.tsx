import { type ReactNode } from 'react'
import { type AccountScoreProps } from '../../interfaces'
import { LeaderboardTableRow } from './LeaderboardTableRow'
import { LeaderboardTableRowSkeleton } from '../skeletons'

interface LeaderboardTableProps {
  leaderboard: AccountScoreProps[]
}

export const LeaderboardTable = (prop: LeaderboardTableProps): ReactNode => {
  let tableRows = (
    <>
      <LeaderboardTableRowSkeleton/>
      <LeaderboardTableRowSkeleton/>
      <LeaderboardTableRowSkeleton/>
    </>
  )

  if (prop.leaderboard.length > 0) {
    tableRows = (
      <>
        {
          prop.leaderboard.map((
            accountScore: AccountScoreProps,
            index
          ) => (
                  <LeaderboardTableRow key={index} accountScore={accountScore}/>
          ))
        }
      </>
    )
  }
  return (
        <table className="table mx-auto max-w-xl bg-accent">
            <thead>
                <tr>
                    <th>User</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
            {
                tableRows
            }
            </tbody>
        </table>
  )
}
