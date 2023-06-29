import React, { useEffect, useState } from 'react'
import useStyles from './Header.style'
import dataTab from './data'
import {
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { randomId, useClickOutside, useDisclosure } from '@mantine/hooks'
import TabGroup from './tabGroup/TabGroup'
import TabGroupVertical from './tabGroupVertical/TabGroupVertical'
import ButtonSignInUp from './buttonSignInUp/ButtonSignInUp'
import AvatarProfile from './avatarProfile/AvatarProfile'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  /* Local State */
  const [opened, setOpened] = useState(false)
  const [scroll, setScroll] = useState(false)
  /* App State */
  const { userLogin } = useSelector((state) => state.user)
  const { cartList } = useSelector((state) => state.cart)
  /* Hook Init */
  const clickOutSideRef = useClickOutside(() => setOpened(false))
  const [openDrawer, { open, close }] = useDisclosure(false)
  const navigate = useNavigate()
  /* Style */
  const { classes, cx } = useStyles()
  /* Logic */
  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY >= 20) {
      setScroll(true)
    }
    if (scrollY === 0) {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Drawer
        zIndex={2000}
        opened={openDrawer}
        onClose={close}
        title="YOUR CART"
      >
        <Stack
          spacing={'xs'}
          mih={'75vh'}
          style={{
            overflow: 'auto',
          }}
        >
          {cartList.map((item) => {
            return (
              <Group
                key={randomId()}
                align="flex-start"
                position="apart"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: 5,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`detail/${item.id}`)
                  close()
                }}
              >
                <Group align="flex-start">
                  <Image src={item.image} maw={50} bg={'white'} />
                  <Stack spacing={0}>
                    <Text
                      fz={12}
                      fw={'bold'}
                      tt={'uppercase'}
                      color="violet.7"
                      truncate
                      className={classes.text}
                    >
                      {item.name}
                    </Text>
                    <Text fz={10} color="dimmed">
                      {`$ ${item.price}`}
                    </Text>
                    <Text fz={10} color="dimmed">
                      {item.quantity}
                    </Text>
                  </Stack>
                </Group>
                <Title order={6} fw={'bold'}>
                  {`$ ${item.total.toLocaleString()}`}
                </Title>
              </Group>
            )
          })}
        </Stack>
        <Button
          onClick={close}
          tt={'uppercase'}
          mt={'xl'}
          variant="outline"
          fullWidth
        >
          continue shopping
        </Button>
        <Button
          onClick={() => {
            navigate('cart')
            close()
          }}
          tt={'uppercase'}
          mt={'xs'}
          fullWidth
        >
          view cart
        </Button>
      </Drawer>
      <header
        ref={clickOutSideRef}
        className={cx(classes.header, { [classes.headerActive]: scroll })}
      >
        <Container fluid>
          <Group position="apart">
            <Burger
              display={'none'}
              opened={opened}
              onClick={() => setOpened((opened) => !opened)}
              className={classes.burger}
            />
            <TabGroup classes={classes} data={dataTab} />
            {userLogin.email ? (
              <AvatarProfile
                classes={classes}
                user={userLogin}
                openDrawer={open}
              />
            ) : (
              <ButtonSignInUp />
            )}
          </Group>
          <TabGroupVertical
            opened={opened}
            setOpened={setOpened}
            classes={classes}
            data={dataTab}
          />
        </Container>
      </header>
      {!scroll && <Divider />}
    </>
  )
}
