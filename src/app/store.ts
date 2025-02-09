import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/PostsSlice'
import usersReducer from '../features/users/userSlice'
const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<AppStore['getState']>
export default store
