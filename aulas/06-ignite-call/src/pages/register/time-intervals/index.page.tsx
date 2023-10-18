import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@orafadev-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'

import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Almost there</Heading>
        <Text>
          Set the time range you are available for each day of the week.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Monday</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Tuesday</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Next step <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
