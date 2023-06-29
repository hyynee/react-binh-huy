import { Grid } from '@mantine/core'
import CardProduct from 'components/cardProduct/CardProduct'
import React from 'react'

export default function ShopProduct({ shuffleRef, productList }) {
  return (
    <Grid ref={shuffleRef}>
      {productList.map((prod, index) => {
        const key = prod ? prod.id : index
        return (
          <Grid.Col
            key={key}
            span={12}
            sm={6}
            md={4}
            className="filter-item"
            data-groups={JSON.stringify(prod?.categories[0]?.id)}
          >
            <CardProduct maxWidth={150} product={prod} />
          </Grid.Col>
        )
      })}
    </Grid>
  )
}
