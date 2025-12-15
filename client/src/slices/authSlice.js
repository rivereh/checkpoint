import { createSlice } from '@reduxjs/toolkit'

// username: {
//   type: String,
//   required: true,
//   min: 3,
//   max: 20,
//   unique: true,
// },
// displayName: {
//   type: String,
// },
// email: {
//   type: String,
//   required: true,
//   unique: true,
// },
// password: {
//   type: String,
//   required: true,
// },
// googleAccount: {
//   type: Boolean,
//   default: false,
// },
// profilePicture: {
//   type: String,
//   default: '',
// },
// coverPicture: {
//   type: String,
//   default: '',
// },
// followers: {
//   type: Array,
//   default: [],
// },
// following: {
//   type: Array,
//   default: [],
// },

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') || '')
    : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = ''
      localStorage.removeItem('userInfo')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
