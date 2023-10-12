import { Button, Heading, MultiStep, Text } from '@orafadev-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { signIn } from 'next-auth/react'

import { ConnectBox, ConnectItem } from './styles'

import { Container, Header } from '../styles'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your calendar!</Heading>
        <Text>
          Connect your calendar to automatically check busy hours and new events
          as they are scheduled.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connect <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Next step <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
