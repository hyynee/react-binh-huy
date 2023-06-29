import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { USER_LOGIN, USER_PRODUCT_LIKE, USER_PROFILE } from 'utils/constant'
import storage from 'utils/storage'

/* Instance Axios */
const SHOES_API_URL = 'https://shop.cyberlearn.vn/api/'
const shoesAPI = axios.create({
  baseURL: SHOES_API_URL,
  timeout: 30000,
})

/* Config Request */
shoesAPI.interceptors.request.use((config) => {
  const token = storage.get(USER_LOGIN)?.accessToken
  if (token) {
    const decodedToken = jwtDecode(token)
    const currentDate = new Date()
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      storage.clear(USER_LOGIN)
      storage.clear(USER_PROFILE)
      storage.clear(USER_PRODUCT_LIKE)
    } else {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

/* Config Response */
const responseSucces = (response) => {
  return response
}
const responseError = (error) => {
  throw error.response?.data
}
shoesAPI.interceptors.response.use(responseSucces, responseError)

export default shoesAPI
