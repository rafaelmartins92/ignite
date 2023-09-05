import { MapPin, ShoppingCart } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';

import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <img src={logoImg} alt="" />

        <HeaderButtonContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Santos, SP
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
