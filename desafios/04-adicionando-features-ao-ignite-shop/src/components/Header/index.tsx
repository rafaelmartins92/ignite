import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../assets/logo.svg';

import { HeaderContainer } from './styles';
import { Cart } from '../Cart';

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a>
          <Image src={logoImg.src} width={52} height={52} alt="" />
        </a>
      </Link>
      <Cart />
    </HeaderContainer>
  );
}
