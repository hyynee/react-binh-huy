import { Tabs } from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TabGroup({ classes, data }) {
  return (
    <Tabs
      variant="pills"
      classNames={{
        root: classes.tabs,
        tab: classes.tab,
      }}
    >
      <Tabs.List>
        {data.map((tab, index) => {
          return (
            <NavLink to={tab.url} key={index}>
              <Tabs.Tab value={tab.title}>{tab.title}</Tabs.Tab>
            </NavLink>
          )
        })}
      </Tabs.List>
    </Tabs>
  )
}
