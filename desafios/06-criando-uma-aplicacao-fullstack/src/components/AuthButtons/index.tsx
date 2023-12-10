import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { AuthButton, Container } from './styles';

type AuthButtonProps = {
  canGuest?: boolean;
  callbackUrl?: string;
};

export const AuthButtons = ({ canGuest, callbackUrl = '/' }: AuthButtonProps) => {
  const router = useRouter();

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl);
      return;
    }
    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn('google')}>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Login with Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <img src="/images/icons/github.svg" alt="Github Logo" />
        Login with Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <img src="/images/icons/rocket.svg" alt="Rocket Logo" />
          Login as a guest
        </AuthButton>
      )}
    </Container>
  );
};
