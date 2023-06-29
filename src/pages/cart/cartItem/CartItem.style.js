import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  wrapper: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: 10,
    position: 'relative',
  },
  controlQuantity: {
    '&:hover': {
      animation: 'unset',
    },
    '&:disabled': {
      backgroundColor: theme.colors.dark[6],
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
  text: {
    [theme.fn.smallerThan('lg')]: {
      width: 300,
    },
    [theme.fn.smallerThan('md')]: {
      width: 250,
    },
    [theme.fn.smallerThan('sm')]: {
      width: 200,
    },
  },
  deleteBtn: {
    position: 'absolute',
    top: 50,
    left: 0,
    translate: '-50% -50%',
  },
}))
