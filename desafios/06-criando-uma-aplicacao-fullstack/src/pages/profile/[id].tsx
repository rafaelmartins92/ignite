import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomeContainer } from '@/styles/pages/home';
import { ProfileRatings } from '@/components/ProfileRatings';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';

import { NextPageWithLayout } from '../_app';

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: profile } = useQuery(
    ['profile', userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`);
      return data?.profile ?? {};
    },
    {
      enabled: !!userId,
    }
  );

  return (
    <HomeContainer>
      <ProfileRatings />
    </HomeContainer>
  );
};

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Profile">{page}</DefaultLayout>;
};

export default ProfilePage;
