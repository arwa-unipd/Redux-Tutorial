import { Impressions } from '../../types'
import PostAuthor from './postAuthor'
import PostReactions from './PostReactions'
import TimeAgo from './TimeAgo'
const Post = ({
  id,
  title,
  content,
  authorId,
  date,
  impressions,
}: {
  id: string
  title: string
  content: string
  authorId: string
  date: string
  impressions: Impressions
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: 599,
        }}
      >
        <PostAuthor authorId={authorId} />
        <TimeAgo postId={id} date={date} />
      </div>
      <PostReactions postId={id} impressions={impressions} />
    </div>
  )
}

export default Post
