import React from 'react'
import { Button, Group } from '@mantine/core'
import openLogin from 'components/formLogin/openLogin'
import openRegister from 'components/formRegister/openRegister'

export default function ButtonSignInUp() {
  return (
    <Group>
      <Button onClick={openLogin} variant="gradient" radius={'md'}>
        Sign In
      </Button>
      <Button onClick={openRegister} variant="default" radius={'md'}>
        Sign Up
      </Button>
    </Group>
  )
}
