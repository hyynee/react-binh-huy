import { Container } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React, { useEffect, useState } from 'react'
import useStyles from './DetailPage.style'
import DetailProduct from './detailProduct/DetailProduct'
import RelatedProduct from './relatedProduct/RelatedProduct'
import { useParams } from 'react-router-dom'
import productAPI from 'services/api/productAPI'

export default function DetailPage() {
  useNaviProgress()
  /* Local State */
  const [detailProduct, setDetailProduct] = useState(undefined)
  const [relatedProduct, setReladtedProduct] = useState(Array(4).fill())
  /* Hook Init */
  const params = useParams()
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  useEffect(() => {
    if (detailProduct) {
      setDetailProduct(undefined)
      setReladtedProduct(Array(4).fill())
    }
    productAPI.getById(params.productId).then((data) => {
      const { price, description, image, name, size, id } = data
      setDetailProduct({ price, description, image, name, size, id })
      setReladtedProduct(data.relatedProducts)
    })
  }, [params.productId])
  return (
    <>
      <section className={classes.detailProduct}>
        <Container size={'xl'}>
          <DetailProduct product={detailProduct} />
        </Container>
      </section>
      <section className={classes.relatedProduct}>
        <Container size={'xl'}>
          <RelatedProduct productList={relatedProduct} />
        </Container>
      </section>
    </>
  )
}
