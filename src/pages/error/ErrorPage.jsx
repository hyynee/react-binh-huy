import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'
import errorPage from 'assets/img/404_page.png'
import useStyles from './ErrorPage.style'
import { useNavigate } from 'react-router-dom'
import useNaviProgress from 'hooks/useNaviProgress'

export default function ErrorPage() {
  useNaviProgress()
  /* Hook Init */
  const navigate = useNavigate()
  /* Style */
  const { classes } = useStyles()
  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        py={80}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
        style={{
          alignItems: 'center',
        }}
      >
        <Image src={errorPage} className={classes.mobileImage} />
        <Stack spacing={0}>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            onClick={() => navigate('/')}
            className={classes.control}
            tt={'capitalize'}
          >
            get back to home page
          </Button>
        </Stack>
        <Image src={errorPage} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}
