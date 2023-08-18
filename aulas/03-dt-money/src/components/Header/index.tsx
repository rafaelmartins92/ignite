import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';

import { NewTransactionModal } from '../NewTransactionModal';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
