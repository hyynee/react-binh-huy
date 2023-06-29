import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import userAPI from 'services/api/userAPI'
import userThunk from 'services/redux/thunk/userThunk'

export default function useLikeProductAPI({ like, product }) {
  const { userProductLike } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return () => {
    if (userProductLike.email && !like) {
      const result = userAPI.likeProduct(product?.id)
      toast.promise(result, {
        loading: 'Loading',
        success: (data) => {
          const action = userThunk.getProductLike()
          dispatch(action)
          return data
        },
        error: (err) => err,
      })
      return
    }
    if (userProductLike.email && like) {
      const result = userAPI.unlikeProduct(product?.id)
      toast.promise(
        result,
        {
          loading: 'Loading',
          success: (data) => {
            const action = userThunk.getProductLike()
            dispatch(action)
            return data
          },
          error: (err) => err,
        },
        {
          success: {
            iconTheme: {
              primary: 'red',
            },
          },
        }
      )
      return
    }
    toast.dismiss()
    toast.error('You are not logged in')
  }
}
