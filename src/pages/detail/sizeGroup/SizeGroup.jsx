import { ActionIcon, Group, Text } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import React, { useState } from 'react'

export default function SizeGroup({ data }) {
  /* Local State */
  const [sizeClick, setSizeClick] = useState(null)
  /* Render */
  const renderBtnSize = () => {
    return data.map((size) => {
      return (
        <ActionIcon
          key={randomId()}
          variant={sizeClick === size ? 'filled' : 'outline'}
          color={sizeClick === size ? 'violet' : 'gray'}
          sx={{
            border: `1px solid ${sizeClick === size ? 'transparent' : 'gray'}`,
          }}
          onClick={() => setSizeClick(size)}
        >
          <Text>{size}</Text>
        </ActionIcon>
      )
    })
  }
  return <Group>{renderBtnSize()}</Group>
}
