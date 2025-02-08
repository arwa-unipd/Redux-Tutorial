import { parseISO, formatDistanceToNow } from 'date-fns'
function TimeAgo({ postId, date }: { postId: string; date: string }) {
  const timeStamp = parseISO(date)

  return <h6>{formatDistanceToNow(timeStamp)}</h6>
}

export default TimeAgo
