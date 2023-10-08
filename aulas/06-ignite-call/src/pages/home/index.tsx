import { Heading, Text } from '@orafadev-ignite-ui/react'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Simplified scheduling
        </Heading>
        <Text size="xl">
          Connect your calendar and allow people to schedule appointments during
          your free time.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendar App preview"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
