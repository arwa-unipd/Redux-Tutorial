import { Impressions, ImpressionsEmojis } from '../../types'
import { useDispatch } from 'react-redux'
import { addNewImpressions } from './postsSlice'
const reactionEmoji: ImpressionsEmojis = {
  thumbUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
}

const PostReactions = ({
  postId,
  impressions,
}: {
  postId: string
  impressions: Impressions
}) => {
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {Object.entries(reactionEmoji).map((item) => {
        return (
          <button
            key={item[0]}
            type="button"
            style={{ display: 'flex', alignItems: 'center', gap: 15 }}
            onClick={() =>
              dispatch(
                addNewImpressions({ postId: postId, emojiName: item[0] })
              )
            }
          >
            {impressions[item[0] as keyof Impressions]} {item[1]}
          </button>
        )
      })}
    </div>
  )
}

export default PostReactions
