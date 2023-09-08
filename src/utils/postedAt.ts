const postedAt = (date: string): string => {
  const now = new Date()
  const posted = new Date(date)
  const diff = now.getTime() - posted.getTime()
  const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 30 * 12))
  const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 7 * 30))
  const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diff / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diff / (1000 * 60))
  const diffSeconds = Math.floor(diff / 1000)

  if (diffYears > 0) {
    return `${diffYears}y`
  } else if (diffMonths > 0) {
    return `${diffMonths}m`
  } else if (diffWeeks > 0) {
    return `${diffWeeks}w`
  } else if (diffDays > 0) {
    return `${diffDays}d`
  } else if (diffHours > 0) {
    return `${diffHours}h`
  } else if (diffMinutes > 0) {
    return `${diffMinutes}m`
  } else if (diffSeconds > 0) {
    return `${diffSeconds}s`
  }
  return 'now'
}

export default postedAt
