import { useSelector } from 'react-redux'
import { User } from '../../types'
import { getAllUsers } from '../users/userSlice'
const PostAuthor = ({ authorId }: { authorId: string }) => {
  const allUsers = useSelector(getAllUsers)
  const postAuthor = allUsers?.find((user: User) => user.id === authorId)
  return (
    <h6>
      <i>{postAuthor?.fullName || 'Unknown Author'}</i>
    </h6>
  )
}

export default PostAuthor
