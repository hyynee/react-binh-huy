import { Avatar, Tooltip } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import React from 'react'

const avatarData = [
  { name: 'Eva Elfie', email: 'human' },
  { name: 'Melody Mark', email: 'human_2' },
  { name: 'Blair Williams', email: 'human_3' },
  { name: 'Eliza Ibarra', email: 'human_4' },
  { name: 'Stella Cox', email: 'human_5' },
]

export default function AvatarCustomer() {
  /* Render */
  const renderAvatar = () => {
    return avatarData.map((customer) => {
      return (
        <Tooltip
          color="violet"
          label={customer.name}
          withArrow
          key={randomId()}
          transitionProps={{
            transition: 'scale',
            duration: 300,
          }}
        >
          <Avatar
            radius={'xl'}
            src={`https://i.pravatar.cc/150?u=${customer.email}@pravatar.com`}
          />
        </Tooltip>
      )
    })
  }
  return (
    <Tooltip.Group>
      <Avatar.Group spacing={'sm'}>
        {renderAvatar()}
        <Tooltip
          color="violet"
          label="More than 9 other people have rated this product"
          multiline
          width={220}
          withArrow
          transitionProps={{
            transition: 'scale',
            duration: 300,
          }}
        >
          <Avatar radius={'xl'}>+9</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  )
}
