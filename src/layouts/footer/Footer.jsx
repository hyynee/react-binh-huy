import React from 'react'
import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { SiFacebook, SiJordan, SiTwitter, SiYoutube } from 'react-icons/si'
import useStyles from './Footer.style'

export default function Footer() {
  /* Style */
  const { classes } = useStyles()
  return (
    <footer className={classes.footer}>
      <Container size={'xl'}>
        <Divider
          my={'xs'}
          label={<SiJordan size={70} />}
          labelPosition="center"
        />
        <Stack align="center" justify="center">
          <Group my={'sm'}>
            <ActionIcon
              variant="filled"
              radius={'xl'}
              size={'lg'}
              color="indigo"
            >
              <SiFacebook size={18} />
            </ActionIcon>
            <ActionIcon variant="filled" radius={'xl'} size={'lg'} color="red">
              <SiYoutube size={18} />
            </ActionIcon>
            <ActionIcon variant="filled" radius={'xl'} size={'lg'} color="blue">
              <SiTwitter size={18} />
            </ActionIcon>
          </Group>
          <Group>
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              News
            </Text>
            <Divider orientation="vertical" />
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              About us
            </Text>
            <Divider orientation="vertical" />
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              Delivery
            </Text>
            <Divider orientation="vertical" />
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              Blog
            </Text>
            <Divider orientation="vertical" />
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              Podcast
            </Text>
            <Divider orientation="vertical" />
            <Text
              color="dimmed"
              component="a"
              href="#"
              className={classes.link}
            >
              Contacts
            </Text>
          </Group>
          <Title order={5} mt={'md'}>
            Design by - Nguyễn Duy Bình
          </Title>
        </Stack>
      </Container>
    </footer>
  )
}
