import { useSelector } from 'react-redux'
import { getAllPosts } from './postsSlice'
import { Post } from '../../types'
import PostElement from './Post'
const PostsList = () => {
  const allPosts: Post[] = useSelector(getAllPosts)
  const allPostsOrdered = allPosts
    .slice()
    .sort((a: Post, b: Post) => b.date.localeCompare(a.date))
  return (
    <div>
      {allPostsOrdered.map((post: Post) => (
        <PostElement
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorId={post.authorId}
          date={post.date}
          impressions={post.impressions}
        />
      ))}
    </div>
  )
}

export default PostsList
