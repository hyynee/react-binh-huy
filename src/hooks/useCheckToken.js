import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from 'services/redux/slices/cartSlice'
import { userAction } from 'services/redux/slices/userSlice'
import storage from 'utils/storage'

export default function useCheckToken() {
  /* App State */
  const { userLogin } = useSelector((state) => state.user)
  /* Hook Init */
  const dispatch = useDispatch()
  /* Logic */
  const checkToken = () => {
    const token = userLogin.accessToken
    if (token) {
      const decodedToken = jwtDecode(token)
      const currentDate = new Date()
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const action = userAction.reset()
        dispatch(action)
        toast.error('Login session expired')
      } else {
        const cartList = storage.get(userLogin.email)
        if (cartList) {
          const action = cartAction.getCartHistory(cartList)
          dispatch(action)
        }
      }
    }
  }
  return useEffect(() => {
    checkToken()
  })
}
