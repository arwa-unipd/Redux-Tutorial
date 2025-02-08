import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState = [
  { id: '1', fullName: 'Arwa Fahoud' },
  { id: '2', fullName: 'Amira Fahoud' },
]

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
})
export const getAllUsers = (state: RootState) => state.users
export default userSlice.reducer
