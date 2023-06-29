import shoesAPI from 'services/axios/configAxios'
import { USER_LOGIN, USER_PRODUCT_LIKE, USER_PROFILE } from 'utils/constant'
import capitalizeStr from 'utils/method'
import storage from 'utils/storage'

const USER_URL = {
  signup: 'Users/signup',
  signin: 'Users/signin',
  getProfile: 'Users/getProfile',
  getProductLike: 'Users/getproductfavorite',
  likeProduct: 'Users/like?productId=',
  unlikeProduct: 'Users/unlike?productId=',
}

const userAPI = {
  signup: async (data) => {
    try {
      const result = await shoesAPI.post(USER_URL.signup, data)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return result.data
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      throw error
    }
  },
  signin: async (data) => {
    try {
      const result = await shoesAPI.post(USER_URL.signin, data)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      storage.save(USER_LOGIN, result.data.content)
      return result.data
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      throw error
    }
  },
  getProfile: async () => {
    const result = await shoesAPI.post(USER_URL.getProfile)
    const { name, email, phone, avatar } = result.data.content
    const userProfile = { name, email, phone, avatar }
    storage.save(USER_PROFILE, userProfile)
    return userProfile
  },
  getProductLike: async () => {
    const result = await shoesAPI.get(USER_URL.getProductLike)
    storage.save(USER_PRODUCT_LIKE, result.data.content)
    return result.data.content
  },
  likeProduct: async (id, fakeLoading = true) => {
    const result = await shoesAPI.get(`${USER_URL.likeProduct}${id}`)
    const messCap = capitalizeStr(result.data.content)
    if (fakeLoading) {
      await new Promise((resolve) => setTimeout(resolve, 200))
    }
    return messCap
  },
  unlikeProduct: async (id, fakeLoading = true) => {
    const result = await shoesAPI.get(`${USER_URL.unlikeProduct}${id}`)
    const messCap = capitalizeStr(result.data.content)
    if (fakeLoading) {
      await new Promise((resolve) => setTimeout(resolve, 200))
    }
    return messCap
  },
}

export default userAPI
