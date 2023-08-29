import { AppProps } from 'next/app';
import Image from 'next/image';

import logoImg from '../assets/logo.svg';

import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={52} height={52} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
