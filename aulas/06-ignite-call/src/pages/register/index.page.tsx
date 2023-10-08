import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@orafadev-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Form, Header } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          Connect your calendar to automatically check busy hours and new events
          as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Username</Text>
          <TextInput prefix="orafadev.com/" placeholder="your-user" />
        </label>

        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="Your name" />
        </label>

        <Button type="submit">
          Next step <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
