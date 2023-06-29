import React from 'react'
import useNaviProgress from 'hooks/useNaviProgress'
import { Container } from '@mantine/core'
import useStyle from './HomePage.style'
import Carousel from './carousel/Carousel'
import PopularProduct from './popularProduct/PopularProduct'

export default function HomePage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyle()
  return (
    <>
      <section className={classes.carousel}>
        <Container fluid>
          <Carousel />
        </Container>
      </section>
      <section className={classes.popularProduct}>
        <Container size={'xl'}>
          <PopularProduct />
        </Container>
      </section>
    </>
  )
}
