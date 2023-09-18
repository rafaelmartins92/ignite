import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Cart } from '../Cart';

import logoImg from '../../assets/logo.svg';

import { HeaderContainer } from './styles';

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== '/success';

  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a>
          <Image src={logoImg.src} width={52} height={52} alt="" />
        </a>
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
