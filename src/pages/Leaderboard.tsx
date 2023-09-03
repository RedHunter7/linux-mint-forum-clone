import { type ReactNode } from 'react'

export const Leaderboard = (): ReactNode => {
  return (
    <div>
        <table className="table mx-auto max-w-xl bg-accent">
            <thead>
                <tr>
                    <th>User</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-7">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus
                            text-neutral-content rounded-full w-12">
                                <span className='md:text-lg'>JO</span>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold mb-1">
                                Hart Hagerty
                            </div>
                            <span className="badge badge-outline badge-sm">
                                User-1645613
                            </span>
                        </div>
                    </div>
                </td>
                <td>90000</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}
