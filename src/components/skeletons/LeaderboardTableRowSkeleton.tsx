import { type ReactNode } from 'react'

export const LeaderboardTableRowSkeleton = (): ReactNode => {
  return (
        <tr className='animate-pulse'>
        <td>
            <div className="flex items-center space-x-7">
                <div className="avatar">
                    <div className="bg-secondary rounded-full w-12">
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="badge bg-secondary badge-sm w-24 mb-1"></div>
                    <span className="badge bg-secondary badge-sm w-12"></span>
                </div>
            </div>
        </td>
        <td>
          <div className='badge badge-secondary w-3/5'></div>
        </td>
    </tr>
  )
}
