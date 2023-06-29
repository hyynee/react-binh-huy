import { createStyles, rem } from '@mantine/core'
import dataCarousel from './carousel/data'

export default createStyles({
  carousel: {
    backgroundImage: `url(${dataCarousel.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  popularProduct: {
    margin: `${rem(50)} 0`,
  },
})
