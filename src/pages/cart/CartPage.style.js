import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  cart: {
    margin: `${rem(50)} 0`,
  },
  control: {
    backgroundColor: theme.colors.dark[7],
    border: 'none',
    '&:disabled': {
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
}))
