import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Stack } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../cartItem/CartItem'
import { randomId } from '@mantine/hooks'

export default function CartList({ maxHeight, maxWidthItem }) {
  /* App State */
  const { cartList, totalItem, recentlyItem } = useSelector(
    (state) => state.cart
  )
  /* Render */
  const renderBadgeContent = () => {
    const itemName = recentlyItem?.name
    const action = recentlyItem?.action
    let message = ''
    switch (action) {
      case 'add':
        message = ' - has beed added to the shopping cart'
        break
      case 'increase':
        message = ' - has increased the quantity'
        break
      case 'reduce':
        message = ' - has reduced the quantity'
        break
      case 'delete':
        message = ' - has been deleted from the shopping cart'
        break
    }
    return itemName + message
  }
  const changeColorBadgeAction = () => {
    const action = recentlyItem?.action
    if (!totalItem) {
      return
    }
    let color = ''
    switch (action) {
      case 'add':
        color = 'green'
        break
      case 'delete':
        color = 'red'
        break
    }
    return color
  }
  const renderCartItem = () => {
    return cartList.map((item) => {
      return (
        <CartItem key={randomId()} maxWidth={maxWidthItem} product={item} />
      )
    })
  }
  return (
    <>
      <Badge
        variant="filled"
        color={changeColorBadgeAction()}
        fullWidth
        py={15}
        radius={'xs'}
        leftSection={
          totalItem !== 0 && (
            <FontAwesomeIcon icon={faBell} fontSize={12} shake />
          )
        }
      >
        {totalItem
          ? renderBadgeContent()
          : 'You have not added any products to your cart yet'}
      </Badge>
      <Stack
        display={totalItem ? 'flex' : 'none'}
        mt={20}
        mah={maxHeight}
        p={10}
        spacing={10}
        style={{
          overflowY: 'auto',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {renderCartItem()}
      </Stack>
    </>
  )
}
