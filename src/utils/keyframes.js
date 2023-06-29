import { keyframes } from '@emotion/react'

export const { ripple, moveY } = {
  ripple: keyframes({
    '0%': { boxShadow: `0 0 0 0 #845EF7` },
    '70%': {
      boxShadow: `0 0 0 10px rgb(255 91 67 / 0%)`,
    },
    '100%': {
      boxShadow: `0 0 0 0 rgb(255 91 67 / 0%)`,
    },
  }),
  moveY: keyframes({
    '0%': { transform: 'translateY(-30px) rotate(-10deg)' },
    '100%': { transform: 'translateY(0px) rotate(-10deg)' },
  }),
}
