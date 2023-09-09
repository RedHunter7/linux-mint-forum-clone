import { type ReactNode } from 'react'
import { type AccountScoreProps } from '../../interfaces'

interface LeaderboardTableRowProps {
  accountScore: AccountScoreProps
}

export const LeaderboardTableRow = (prop: LeaderboardTableRowProps): ReactNode => {
  return (
    <tr>
        <td>
            <div className="flex items-center space-x-7">
                <div className="avatar">
                    <div className="rounded-full w-12">
                        <img src={prop.accountScore.user.avatar}/>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-1">
                        {prop.accountScore.user.name}
                    </div>
                    <span className="badge badge-outline badge-sm">
                        {prop.accountScore.user.id}
                    </span>
                </div>
            </div>
        </td>
        <td>{prop.accountScore.score}</td>
    </tr>
  )
}
