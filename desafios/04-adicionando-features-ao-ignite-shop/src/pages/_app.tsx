import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '../components/Header';
import { CartContextProvider } from '../contexts/CartContext';

import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="32x32" />
      </Head>

      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
