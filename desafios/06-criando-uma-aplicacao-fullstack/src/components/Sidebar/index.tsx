import { signOut, useSession } from 'next-auth/react';
import { SignIn, SignOut } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

import { Navigation } from '../Navigation';
import { Text } from '../Typography';
import { Avatar } from '../ui/Avatar';

import { Container, LoginButton, UserDetails } from './styles';

export const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`);
  };

  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="BookWise Logo" className="logo" />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar
              size="sm"
              src={user?.avatar_url}
              alt={user.name}
              onClick={handleOpenProfile}
              css={{ cursor: 'pointer' }}
            />
            <Text size="sm">{user.name}</Text>
            <SignOut size={20} color="#f74a68" onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  );
};
