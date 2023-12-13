import { ChartLineUp, Binoculars, User } from '@phosphor-icons/react';

import { Container, NavItemContainer } from './styles';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

const NAT_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <Binoculars size={24} />,
  },
];

export const Navigation = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const navItems = useMemo(() => {
    if (session) {
      return NAT_ITEMS.concat({ label: 'Profile', href: `/profile/${session.user.id}`, icon: <User size={24} /> });
    }

    return NAT_ITEMS;
  }, [session]);

  return (
    <Container>
      {navItems.map(({ href, label, icon }) => (
        <NavItemContainer href={href} key={label} active={router.asPath === href}>
          {icon}
          {label}
        </NavItemContainer>
      ))}
    </Container>
  );
};
