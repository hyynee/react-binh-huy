import React, { useEffect, useState } from 'react'
import { Card, Divider, Grid, Image, MediaQuery, Title } from '@mantine/core'
import productAPI from 'services/api/productAPI'
import shoesArt from 'assets/img/shoes-art.jpg'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import CardProduct from 'components/cardProduct/CardProduct'
import { randomId } from '@mantine/hooks'

export default function PopularProduct() {
  /* Local State */
  const [productList, setProductList] = useState(Array(4).fill())
  /* Render */
  const renderBannerArt = () => {
    if (!productList[0]) {
      return (
        <Skeleton
          height={'100%'}
          style={{
            display: 'block',
          }}
        />
      )
    }
    return (
      <NavLink to={'/shop'}>
        <Image
          src={shoesArt}
          fit="cover"
          height={'100%'}
          styles={{
            root: {
              height: '100%',
            },
            imageWrapper: {
              height: '100%',
            },
            figure: {
              height: '100%',
            },
            image: {
              '&:hover': {
                transition: 'all ease 4s',
                transform: 'scale(1.2)',
              },
            },
          }}
        />
      </NavLink>
    )
  }
  const renderProduct = () => {
    return productList.map((prod) => {
      return (
        <Grid.Col xs={6} key={randomId()}>
          <CardProduct maxWidth={150} product={prod} />
        </Grid.Col>
      )
    })
  }
  /* Logic */
  useEffect(() => {
    productAPI.getAll().then((data) => {
      const dataCoppy = [...data]
      const productListRandom = productList.map(() => {
        const iRandom = Math.floor(Math.random() * dataCoppy.length)
        const prodRandom = dataCoppy[iRandom]
        dataCoppy.splice(iRandom, 1)
        return prodRandom
      })
      setProductList(productListRandom)
    })
  }, [])
  return (
    <>
      <Divider
        label={
          <Title order={4} mr={10} tt={'uppercase'}>
            Most Popular
          </Title>
        }
        labelPosition="left"
        my={30}
      />
      <Grid justify="center">
        <Grid.Col lg={6} md={5}>
          <Card h={'100%'} mih={300} p={0}>
            {renderBannerArt()}
          </Card>
        </Grid.Col>
        <MediaQuery
          query="(max-width: 992px)"
          styles={(theme) => ({
            display: 'block',
            margin: `${theme.spacing.md} 0`,
          })}
        >
          <Title order={2} display={'none'} tt={'uppercase'}>
            Hot Collection
          </Title>
        </MediaQuery>
        <Grid.Col lg={6} md={7}>
          <Grid>{renderProduct()}</Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}
