import { Container, Grid, Stack, Text, Title } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React, { useEffect, useRef, useState } from 'react'
import useStyles from './ShopPage.style'
import productAPI from 'services/api/productAPI'
import Shuffle from 'shufflejs'
import ShopProduct from './shopProduct/ShopProduct'
import MenuFilter from './menuFilter/MenuFilter'

export default function ShopPage() {
  useNaviProgress()
  /* Local State */
  const [productList, setProductList] = useState(Array(6).fill())
  const [shoesTotal, setShoesTotal] = useState(0)
  const [shuffle, setShuffle] = useState(null)
  const [filterKey, setFilterKey] = useState('*')
  /* Hook Init */
  const shuffleRef = useRef()
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  const createShuffle = () => {
    setShuffle(
      new Shuffle(shuffleRef.current, {
        itemSelector: '.filter-item',
        speed: 500,
        staggerAmount: 100,
        useTransforms: true,
      })
    )
  }
  const filterProduct = (keyFilter) => {
    if (shuffle) {
      setFilterKey(keyFilter)
    } else {
      createShuffle()
      setFilterKey(keyFilter)
      Shuffle.ALL_ITEMS = '*'
    }
  }
  useEffect(() => {
    productAPI.getAll().then((data) => {
      setProductList(data)
      setShoesTotal(data.length)
    })
  }, [])
  useEffect(() => {
    if (shuffle) {
      shuffle.sort({})
      shuffle.filter(filterKey)
      setShoesTotal(shuffle.sortedItems.length)
    }
  }, [filterKey])
  return (
    <>
      <section className={classes.titleShop}>
        <Container size={'xl'}>
          <Stack spacing={0} align="flex-end">
            <Title tt={'uppercase'} order={3}>
              all shoes
            </Title>
            <Text color="dimmed" fz={14} mb={'xs'} tt={'uppercase'}>
              there are {shoesTotal} item(s) in filter
            </Text>
          </Stack>
        </Container>
      </section>
      <section className={classes.shop}>
        <Container size={'xl'}>
          <Grid>
            <Grid.Col span={12} md={2}>
              <MenuFilter classes={classes} filterProduct={filterProduct} />
            </Grid.Col>
            <Grid.Col span={12} md={10}>
              <ShopProduct shuffleRef={shuffleRef} productList={productList} />
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  )
}
