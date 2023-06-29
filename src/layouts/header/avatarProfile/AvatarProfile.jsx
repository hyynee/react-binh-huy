import React from 'react'
import {
  faCartPlus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Group, Indicator, Menu } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGIN, USER_PRODUCT_LIKE, USER_PROFILE } from 'utils/constant'
import { userAction } from 'services/redux/slices/userSlice'
import storage from 'utils/storage'
import { cartAction } from 'services/redux/slices/cartSlice'

export default function AvatarProfile({ classes, user, openDrawer }) {
  /* App State */
  const { userProfile } = useSelector((state) => state.user)
  const { totalItem } = useSelector((state) => state.cart)
  /* Hook Init */
  const dispatch = useDispatch()
  /* Logic */
  const logoutAccount = () => {
    storage.clear(USER_LOGIN)
    storage.clear(USER_PROFILE)
    storage.clear(USER_PRODUCT_LIKE)
    dispatch(userAction.reset())
    dispatch(cartAction.reset())
  }
  return (
    <Group>
      <Menu trigger="click" withArrow>
        <Menu.Target>
          <Indicator withBorder processing color="green" size={12} offset={5}>
            <Avatar
              radius={'xl'}
              src={userProfile.avatar}
              style={{
                cursor: 'pointer',
              }}
            />
          </Indicator>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{user.email}</Menu.Label>
          <NavLink to={'/account'}>
            <Menu.Item icon={<FontAwesomeIcon icon={faUser} />}>
              View Profile
            </Menu.Item>
          </NavLink>
          <NavLink to={'/cart'}>
            <Menu.Item icon={<FontAwesomeIcon icon={faCartPlus} />}>
              View Cart
            </Menu.Item>
          </NavLink>
          <Menu.Divider />
          <Menu.Item onClick={logoutAccount}>Log out</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Indicator
        color="red"
        label={totalItem > 99 ? '99+' : totalItem}
        disabled={!totalItem}
        onClick={openDrawer}
      >
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
      </Indicator>
    </Group>
  )
}
