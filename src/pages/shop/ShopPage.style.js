import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  titleShop: {
    margin: `${rem(50)} 0 ${rem(10)} 0`,
  },
  shop: {
    margin: ` 0 0 ${rem(50)} 0`,
  },
  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  tab: {
    backgroundColor: theme.colors.gray[9],
    marginRight: 10,
    marginBottom: 10,
    border: 'none',
    transition: 'all 0.1s ease',
    '&[data-active]': {
      backgroundColor: theme.fn.primaryColor(),
    },
    '&:not([data-active]):hover': {
      backgroundColor: theme.colors.gray[7],
    },
  },
  menu: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
    },
  },
}))
