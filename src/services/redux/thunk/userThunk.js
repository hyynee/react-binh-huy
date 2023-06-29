import { createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from 'services/api/userAPI'

const userThunk = {
  getProfile: createAsyncThunk('userProfile', userAPI.getProfile),
  getProductLike: createAsyncThunk('userProductLike', userAPI.getProductLike),
}

export default userThunk
