import { ReactNode } from 'react';
import { BulletPointContainer, IconContainer } from './styles';

interface BulletPointProps {
  icon: ReactNode;
  iconBgColor: string;
  text: string | ReactNode;
}

export function BulletPoint({ icon, iconBgColor, text }: BulletPointProps) {
  return (
    <BulletPointContainer>
      <IconContainer iconBgColor={iconBgColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </BulletPointContainer>
  );
}
