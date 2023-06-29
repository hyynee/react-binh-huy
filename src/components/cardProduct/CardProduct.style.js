import { createStyles, rem } from '@mantine/core'
import bgProduct from 'assets/img/bg-product.jpg'

export default createStyles((theme, { hovered }) => ({
  card: {
    transition: 'all 0.3s ease',
    transform: hovered ? 'translateY(-10px)' : '',
  },
  cardSection: {
    position: 'relative',
    backgroundImage: `url(${bgProduct})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(1px) brightness(0.7)',
    },
  },
  rootImage: {
    margin: '0 auto',
    padding: '10px 0',
  },
  image: {
    transition: 'all 0.6s ease',
    '&:hover': {
      transform: 'rotate(-5deg) scale(1.05)',
      filter: 'drop-shadow(5px 5px 10px #6741D9)',
    },
  },
  badgeTop: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },
  title: {
    display: 'block',
    marginBottom: rem(5),
    color: theme.white,
  },
  likeIcon: {
    position: 'absolute',
    top: theme.spacing.xs,
    left: rem(12),
    backgroundColor: theme.colors.dark[5],
    border: `1px solid ${theme.fn.primaryColor()}`,
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
}))
