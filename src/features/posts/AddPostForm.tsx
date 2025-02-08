import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../users/userSlice'
import { addNewPost } from '../posts/postsSlice'

function AddPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorId, setAuthorId] = useState('1')
  const allUsers = useSelector(getAllUsers)
  const dispatch = useDispatch()
  return (
    <section>
      <h1>Add New Post</h1>
      <form action="">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <label htmlFor="">Post Title:</label>
          <input
            type="text"
            placeholder="Enter Post Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <label htmlFor="">Select Author:</label>
          <select
            name=""
            id=""
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option value=""></option>
            {allUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.fullName}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <label htmlFor="">Post Content:</label>
          <textarea
            name=""
            id=""
            placeholder="Enter Post Content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          style={{ marginTop: 20 }}
          onClick={() => dispatch(addNewPost(title, content, authorId))}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
