import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core'
import React from 'react'
import useStyles from './CartItem.style'
import { useDispatch } from 'react-redux'
import { cartAction } from 'services/redux/slices/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { modals } from '@mantine/modals'
import { toast } from 'react-hot-toast'

export default function CartItem({ maxWidth, product }) {
  /* Hook Init */
  const dispatch = useDispatch()
  /* Styles */
  const { classes } = useStyles()
  /* Logic */
  const increaseQuantity = () => {
    const action = cartAction.increaseQuantity(product.id)
    dispatch(action)
  }
  const reduceQuantity = () => {
    if (product.quantity === 1) {
      deleteItem()
      return
    }
    const action = cartAction.reduceQuantity(product.id)
    dispatch(action)
  }
  const deleteItem = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      centered: true,
      children: (
        <Text size={'sm'}>
          Do you want to remove this product from your cart?
        </Text>
      ),
      labels: {
        confirm: 'Delete',
        cancel: 'Cancel',
      },
      onConfirm: () => {
        const action = cartAction.delete(product.id)
        dispatch(action)
        toast.success('Product removed from cart successfully!')
      },
    })
  }
  return (
    <Box className={classes.wrapper}>
      <Tooltip.Floating label="Delete item" color="violet">
        <ActionIcon
          size={'xs'}
          radius={'xl'}
          color="violet"
          variant="default"
          className={classes.deleteBtn}
          onClick={deleteItem}
        >
          <FontAwesomeIcon icon={faTrash} fontSize={10} />
        </ActionIcon>
      </Tooltip.Floating>
      <Grid>
        <Grid.Col span={12} sm={8}>
          <Group align="flex-start">
            <Image src={product.image} maw={maxWidth} bg={'white'} />
            <Stack spacing={5}>
              <Text
                fz={14}
                fw={'bold'}
                tt={'uppercase'}
                color="violet.7"
                truncate
                className={classes.text}
              >
                {product.name}
              </Text>
              <Text fz={14} color="dimmed">
                {`$ ${product.price}`}
              </Text>
              <Text
                fz={12}
                color="dimmed"
                tt={'capitalize'}
                w={350}
                truncate
                className={classes.text}
              >
                {product.shortDescription}
              </Text>
            </Stack>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <Group position="apart" align="flex-start">
            <Button.Group>
              <Button
                size="xs"
                variant="default"
                className={classes.controlQuantity}
                onClick={reduceQuantity}
              >
                -
              </Button>
              <Button
                size="xs"
                disabled
                className={classes.controlQuantity}
                styles={{
                  inner: {
                    minWidth: 15,
                  },
                }}
              >
                {product.quantity}
              </Button>
              <Button
                size="xs"
                variant="default"
                className={classes.controlQuantity}
                onClick={increaseQuantity}
              >
                +
              </Button>
            </Button.Group>
            <Title order={5} fw={'bold'}>
              {`$ ${product.total.toLocaleString()}`}
            </Title>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
