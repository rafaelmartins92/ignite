import { ComponentProps, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { ExternalLinkContainer } from './styles';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: 'iconLeft';
  as?: 'a' | 'button';
};

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
}