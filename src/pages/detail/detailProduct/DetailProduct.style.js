import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  likeIcon: {
    backgroundColor: theme.colors.dark[5],
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
  wrapQuantity: {
    width: 'fit-content',
    padding: `${rem(3)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid transparent`,
    backgroundColor: theme.colors.dark[5],
    flexGrow: 1,
    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },
  controlQuantity: {
    backgroundColor: theme.colors.dark[7],
    '&:disabled': {
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
  btnAdd: {
    flexGrow: 10,
  },
}))
