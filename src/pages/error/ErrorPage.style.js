import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
    [theme.fn.largerThan('sm')]: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
  },
  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },
  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}))
