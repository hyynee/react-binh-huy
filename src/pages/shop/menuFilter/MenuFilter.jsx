import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Group, Menu, Tabs, Title } from '@mantine/core'
import React from 'react'

export default function MenuFilter({ filterProduct, classes }) {
  return (
    <>
      <Tabs
        orientation="vertical"
        defaultValue="*"
        onTabChange={filterProduct}
        h={'100%'}
        classNames={{
          root: classes.tabs,
          tab: classes.tab,
        }}
      >
        <Tabs.List w={'100%'}>
          <Title order={4} mb={'md'} tt={'uppercase'}>
            categories
          </Title>
          <Tabs.Tab value="*">All Shoes</Tabs.Tab>
          <Tabs.Tab value="VANS_CONVERSE">Vans Converse</Tabs.Tab>
          <Tabs.Tab value="ADIDAS">Adidas</Tabs.Tab>
          <Tabs.Tab value="NIKE">Nike</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Group position="apart" display={'none'} className={classes.menu}>
        <Title order={4}>CATEGORIES</Title>
        <Menu
          withArrow
          shadow="xl"
          width={125}
          transitionProps={{
            transition: 'slide-left',
            duration: 200,
            timingFunction: 'ease',
          }}
        >
          <Menu.Target>
            <Button
              variant="outline"
              rightIcon={<FontAwesomeIcon icon={faArrowDown} />}
            >
              Filter
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label c={'white'} bg={'violet'}>
              By
            </Menu.Label>
            <Menu.Divider />
            <Menu.Item onClick={() => filterProduct('*')}>All Shoes</Menu.Item>
            <Menu.Item onClick={() => filterProduct('VANS_CONVERSE')}>
              Vans Converse
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                filterProduct('ADIDAS')
              }}
            >
              Adidas
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                filterProduct('NIKE')
              }}
            >
              Nike
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </>
  )
}
