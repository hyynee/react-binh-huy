import { createSlice } from '@reduxjs/toolkit'
import userThunk from '../thunk/userThunk'
import storage from 'utils/storage'
import { USER_LOGIN, USER_PRODUCT_LIKE, USER_PROFILE } from 'utils/constant'

const initialState = {
  userLogin: storage.get(USER_LOGIN) || {},
  userProfile: storage.get(USER_PROFILE) || {},
  userProductLike: storage.get(USER_PRODUCT_LIKE) || {},
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload
    },
    reset: (state) => {
      state.userLogin = {}
      state.userProfile = {}
      state.userProductLike = {}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.getProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload
    })
    builder.addCase(userThunk.getProductLike.fulfilled, (state, action) => {
      state.userProductLike = action.payload
    })
  },
})

export const userAction = userSlice.actions

export default userSlice.reducer
