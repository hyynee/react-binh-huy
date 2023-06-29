import React, { useEffect, useState } from 'react'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Group,
  Progress,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import PaymentIcon from 'components/paymentIcon/PaymentIcon'
import { useSelector } from 'react-redux'

export default function OrderDetail() {
  /* Local State */
  const [progress, setProgress] = useState(0)
  /* App State */
  const { totalPrice } = useSelector((state) => state.cart)
  /* Logic */
  useEffect(() => {
    const value = totalPrice / 20
    setProgress(value)
  }, [totalPrice])
  return (
    <Stack
      h={'100%'}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Title
        p={15}
        order={4}
        bg={'gray.9'}
        fw={'bold'}
        ta={'center'}
        tt={'uppercase'}
      >
        Order Detail
      </Title>
      <Box>
        <Group position="apart" p={10}>
          <Text tt={'uppercase'} fw={'bold'}>
            Total :
          </Text>
          <Text tt={'uppercase'} fw={'bold'}>
            $ {totalPrice.toLocaleString()}
          </Text>
        </Group>
        <Group position="apart" p={10}>
          <Text tt={'uppercase'} fw={'bold'}>
            Shipping :
          </Text>
          <Text tt={'capitalize'} fz={12} color="dimmed">
            Shipping & taxes calculated at checkout
          </Text>
        </Group>
        <Stack p={10}>
          <Text color="green" fz={12} fw={500}>
            {progress >= 100
              ? `CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!`
              : `SPEND $${2000 - totalPrice} FOR FREE SHIPPING`}
            <FontAwesomeIcon
              icon={faTruckFast}
              bounce
              style={{
                marginLeft: 5,
                display: progress >= 100 ? 'inline-block' : 'none',
              }}
            />
          </Text>
          <Progress value={progress} color="green" w={'100%'} animate />
          <Text tt={'capitalize'} fz={12} color="dimmed">
            Free shipping for any orders above{' '}
            <span
              style={{
                color: '#2F9E44',
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              $2000
            </span>
          </Text>
        </Stack>
      </Box>
      <PaymentIcon />
      <Stack p={10}>
        <Text tt={'uppercase'} fw={'bold'}>
          Add a note to your order :
        </Text>
        <Textarea placeholder="Your note" />
        <Button tt={'uppercase'}>Confirm Order</Button>
      </Stack>
    </Stack>
  )
}
