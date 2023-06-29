import { createStyles, rem } from '@mantine/core'

export default createStyles({
  footer: {
    margin: `${rem(50)} 0`,
  },
  link: {
    transition: 'all 0.2s linear',
    '&:hover': {
      color: 'white',
    },
  },
})
