import {
  getAllPosts,
  fetchPosts,
  getPostsStatus,
  getPostsError,
} from './PostsSlice'
import { Post } from '../../types'
import PostElement from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from '../../app/store'
const PostsList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const allPosts: Post[] = useSelector(getAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const postsError = useSelector(getPostsError)
  console.log(allPosts)
  const orderedPosts = allPosts
    .slice()
    .sort((a: Post, b: Post) => b.date.localeCompare(a.date))

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  if (postsStatus === 'loading')
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Posts are loading...
      </div>
    )
  if (postsStatus === 'failed') return <p>{postsError}</p>
  if (postsStatus === 'success')
    return (
      <div>
        {orderedPosts.map((post: Post) => (
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
