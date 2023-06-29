import React from 'react'
import { Divider, SimpleGrid, Title } from '@mantine/core'
import CardProduct from 'components/cardProduct/CardProduct'
import { randomId } from '@mantine/hooks'

export default function RelatedProduct({ productList }) {
  return (
    <>
      <Divider
        label={<Title order={3}>Related Product</Title>}
        labelPosition="center"
        mt={70}
        mb={'xl'}
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
        {productList.map((item) => {
          return <CardProduct maxWidth={150} product={item} key={randomId()} />
        })}
      </SimpleGrid>
    </>
  )
}
