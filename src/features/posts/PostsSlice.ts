import { Impressions } from './../../types'
import { sub } from 'date-fns'
import {
  createSlice,
  nanoid,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { Post } from '../../types'
import axios from 'axios'
import { RootState } from '../../app/store'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
type PostsState = {
  posts: Post[]
  status: 'idle' | 'loading' | 'success' | 'failed'
  error: any
}
const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    const response = await axios.get(POST_URL)
    return response.data
  } catch (e) {
    return e
  }
})
const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload)
      },
      prepare(title: string, content: string, authorId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            authorId,
            date: new Date().toISOString(),
            impressions: {
              thumbUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }
      },
      //   prepare(title: string, content: string, authorId: string) {
      //     return {
      //       payload: {
      //         id: nanoid(),
      //         title,
      //         content,
      //         authorId,
      //         date: new Date().toISOString(),
      //         impressions: {
      //           thumbUp: 0,
      //           wow: 0,
      //           heart: 0,
      //           rocket: 0,
      //           coffee: 0,
      //         },
      //       },
      //     }
      //   },
    },
    addNewImpressions: (state, action) => {
      const { postId, emojiName } = action.payload
      console.log(postId)
      const post = state.posts.find((item) => item.id === postId)
      if (post) {
        post.impressions[emojiName as keyof Impressions]++
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: PostsState, action) => {
      state.status = 'loading'
    })
    builder.addCase(fetchPosts.fulfilled, (state: PostsState, action) => {
      state.status = 'success'
      let min = 1
      const updatedPosts = action.payload.map((post: any) => {
        return {
          ...post,
          date: sub(new Date(), { minutes: min++ }).toISOString(),
          impressions: {
            thumbUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        }
      })

      state.posts = updatedPosts
    })
    builder.addCase(fetchPosts.rejected, (state: PostsState, action) => {
      state.status = 'failed'
      state.error = action.error
    })
  },
})

export const getAllPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error
export const { addNewPost, addNewImpressions } = PostsSlice.actions
export default PostsSlice.reducer
