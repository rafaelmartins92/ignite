import { Box, styled } from '@orafadev-ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 600px': {
    gridTemplateColumns: '1fr',
  },
})
