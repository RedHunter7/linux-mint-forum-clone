import { type ReactNode } from 'react'
import { type AccountScoreProps } from '../../interfaces'
import { LeaderboardTableRow } from './LeaderboardTableRow'

interface LeaderboardTableProps {
  leaderboard: AccountScoreProps[] | null
}

export const LeaderboardTable = (prop: LeaderboardTableProps): ReactNode => {
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
                prop.leaderboard.map((
                  accountScore: AccountScoreProps,
                  index
                ) => (
                    <LeaderboardTableRow key={index} accountScore={accountScore}/>
                ))
            }
            </tbody>
        </table>
  )
}
