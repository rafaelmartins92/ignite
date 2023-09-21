import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque maxime quas quasi. Atque, quibusdam.',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}
