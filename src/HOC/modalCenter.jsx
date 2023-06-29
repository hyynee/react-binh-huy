import React from 'react'
import { modals } from '@mantine/modals'

export default function modalCenter(Component) {
  return modals.open({
    children: <Component />,
    centered: true,
    size: 'lg',
    withCloseButton: false,
    shadow: 'xl',
    overlayProps: {
      blur: 5,
      opacity: 0.7,
    },
    transitionProps: {
      transition: 'scale',
      duration: 300,
      timingFunction: 'ease',
    },
    styles: {
      title: {
        margin: '0 auto',
      },
    },
  })
}
