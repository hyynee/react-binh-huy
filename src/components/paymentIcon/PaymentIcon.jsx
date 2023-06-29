import { Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from 'react-icons/fa'

export default function PaymentIcon() {
  return (
    <Stack>
      <Divider
        label={<Text>GUARANTEED SAFE CHECKOUT</Text>}
        labelPosition="center"
      />
      <Group position="center">
        <ThemeIcon size={'xl'}>
          <FaCcVisa size={'100%'} />
        </ThemeIcon>
        <ThemeIcon size={'xl'}>
          <FaCcPaypal size={'100%'} />
        </ThemeIcon>
        <ThemeIcon size={'xl'}>
          <FaCcMastercard size={'100%'} />
        </ThemeIcon>
        <ThemeIcon size={'xl'}>
          <FaCcAmazonPay size={'100%'} />
        </ThemeIcon>
        <ThemeIcon size={'xl'}>
          <FaCcApplePay size={'100%'} />
        </ThemeIcon>
      </Group>
    </Stack>
  )
}
