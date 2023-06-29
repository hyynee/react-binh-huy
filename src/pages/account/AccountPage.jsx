import {
  Avatar,
  Card,
  Container,
  Divider,
  Group,
  Indicator,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React, { useEffect, useState } from 'react'
import useStyles from './AccountPage.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import productAPI from 'services/api/productAPI'
import CardProduct from 'components/cardProduct/CardProduct'
import openLogin from 'components/formLogin/openLogin'
import { randomId } from '@mantine/hooks'

export default function AccountPage() {
  useNaviProgress()
  /* Local State */
  const [productList, setProductList] = useState([])
  /* App State */
  const { userProfile, userProductLike } = useSelector((state) => state.user)
  /* Hook Init */
  const navigate = useNavigate()
  /* Style */
  const { classes } = useStyles()
  /* Render */
  const renderProduct = () => {
    return productList.map((prod) => {
      return <CardProduct key={randomId()} maxWidth={150} product={prod} />
    })
  }
  /* Logic */
  useEffect(() => {
    if (!userProductLike.email) {
      navigate('/')
      return () => {
        toast.error('You are not logged in')
        openLogin()
      }
    }
    productAPI.getAll(false).then((data) => {
      const listIdLike = userProductLike.productsFavorite.map((prod) => prod.id)
      const productsLike = data.filter((prod) => listIdLike.includes(prod.id))
      setProductList(productsLike)
    })
  }, [userProfile, userProductLike])
  return (
    <>
      <section className={classes.profile}>
        <Container size={'xl'}>
          <Card withBorder padding="xl" radius="md">
            <Card.Section
              sx={(theme) => ({
                background: theme.fn.radialGradient(
                  theme.colors.violet[5],
                  theme.colors.violet[9],
                  theme.colors.gray[9]
                ),
                height: 140,
              })}
            />
            <Group position="center">
              <Tooltip
                label={'Diamon Member'}
                color="violet"
                withArrow
                arrowSize={6}
                offset={35}
                transitionProps={{
                  transition: 'slide-left',
                  duration: 200,
                  timingFunction: 'ease',
                }}
              >
                <Indicator
                  inline
                  label={<FontAwesomeIcon icon={faGem} />}
                  size={24}
                >
                  <Avatar
                    src={userProfile.avatar}
                    size={80}
                    radius={80}
                    mt={-35}
                  />
                </Indicator>
              </Tooltip>
            </Group>
            <Group position="center" mb={'md'}>
              <Stack spacing={0}>
                <Text ta="center" fz="lg" fw={500} mt="sm" color="white">
                  {userProfile.name}
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                  {userProfile.email}
                </Text>
              </Stack>
            </Group>
            <Divider
              label={
                <Text size={18} mx={10} color="white">
                  My Wish List
                </Text>
              }
              labelPosition="center"
              my={'xl'}
            />
            <SimpleGrid
              cols={4}
              breakpoints={[
                {
                  maxWidth: 'lg',
                  cols: 3,
                },
                {
                  maxWidth: 'md',
                  cols: 2,
                },
                {
                  maxWidth: 'xs',
                  cols: 1,
                },
              ]}
            >
              {renderProduct()}
            </SimpleGrid>
          </Card>
        </Container>
      </section>
    </>
  )
}
