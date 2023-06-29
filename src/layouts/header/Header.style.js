import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  header: {
    padding: '15px 0',
    backgroundColor: 'transparent',
    borderBottom: '1px solid transparent',
    transition: 'all 0.4s ease',
  },
  headerActive: {
    padding: '10px 0',
    position: 'fixed',
    width: '100%',
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
    top: 0,
    zIndex: 1000,
    backgroundColor: theme.colors.gray[9],
  },
  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  tabsActive: {
    padding: '15px 0',
    [theme.fn.smallerThan('md')]: {
      display: 'block',
    },
  },
  tab: {
    color: theme.white,
    fontWeight: 'bold',
    position: 'relative',
    marginRight: 5,
    '&:not([data-active])': {
      '&:after': {
        content: "''",
        width: 0,
        height: 2,
        position: 'absolute',
        borderRadius: 10,
        bottom: 0,
        left: 0,
        transition: 'all 0.4s ease',
      },
      '&:hover:after': {
        width: '100%',
        background: theme.fn.gradient(),
      },
    },
    '&[data-active]:hover': {
      backgroundColor: theme.fn.darken(theme.fn.primaryColor(), 0.2),
    },
  },
  icon: {
    cursor: 'pointer',
  },
  burger: {
    [theme.fn.smallerThan('md')]: {
      display: 'block',
    },
  },
}))
