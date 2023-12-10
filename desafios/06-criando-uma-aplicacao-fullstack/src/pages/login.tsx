import { AuthButtons } from '@/components/AuthButtons';
import { Heading, Text } from '@/components/Typography';
import { LoginContainer, LoginSection, WelcomeSection } from '@/styles/pages/login';
import Head from 'next/head';
import Image from 'next/image';

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <LoginSection>
        <Image src="/images/logo.svg" alt="BookWise Logo" width={232} height={58} />
      </LoginSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Welcome!
        </Heading>
        <Text color="gray-200">Log in or access as a guest.</Text>
        <AuthButtons canGuest={true} />
      </WelcomeSection>
    </LoginContainer>
  );
}
