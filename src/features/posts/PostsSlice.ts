import { Impressions } from './../../types'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { Post } from '../../types'
const initialState: Post[] = [
  {
    id: '1',
    title: 'Title1',
    content: 'content1',
    authorId: '1',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    impressions: {
      thumbUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: '2',
    title: 'Title2',
    content: 'content1',
    authorId: '2',
    date: sub(new Date(), { minutes: 40 }).toISOString(),
    impressions: {
      thumbUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
]

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
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
      const post = state.find((item) => item.id === postId)
      if (post) {
        post.impressions[emojiName as keyof Impressions]++
      }
    },
  },
})

export const getAllPosts = (state: any) => state.posts
export const { addNewPost, addNewImpressions } = PostsSlice.actions
export default PostsSlice.reducer
