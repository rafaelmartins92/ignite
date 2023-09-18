import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: '1.4',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$yellow400',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$yellow300',
    },
  },
});

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  },
});

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #FBBF24 0%, #D465C2 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
});
