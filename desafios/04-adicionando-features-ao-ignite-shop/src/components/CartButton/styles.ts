import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
      yellow: {
        background: '$yellow400',
        color: '$gray900',

        '&:not(:disabled):hover': {
          background: '$yellow300',
        },
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
});
