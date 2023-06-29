import { createBrowserRouter } from 'react-router-dom'
import RootTemplate from 'templates/RootTemplate'
import AccountPage from 'pages/account/AccountPage'
import CartPage from 'pages/cart/CartPage'
import DetailPage from 'pages/detail/DetailPage'
import ErrorPage from 'pages/error/ErrorPage'
import HomePage from 'pages/home/HomePage'
import ShopPage from 'pages/shop/ShopPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
    ],
  },
])

export default router
