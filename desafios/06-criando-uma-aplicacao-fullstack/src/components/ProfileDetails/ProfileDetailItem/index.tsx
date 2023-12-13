import { ReactNode } from 'react';

import { Heading, Text } from '@/components/Typography';

import { Container } from './styles';

type ProfileDetailItemProps = {
  icon: ReactNode;
  info: string | number;
  label: string;
};

export const ProfileDetailItem = ({ icon, info, label }: ProfileDetailItemProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Heading size="xs" color="gray-200">
          {info}
        </Heading>
        <Text size="sm">{label}</Text>
      </div>
    </Container>
  );
};
