import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomeContainer } from '@/styles/pages/home';
import { ProfileRatings } from '@/components/ProfileRatings';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { Rating } from '@prisma/client';

import { NextPageWithLayout } from '../_app';

export type ProfileData = {
  user: {
    avatar_url: string;
    name: string;
    member_since: string;
  };
  rating: Rating[];
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
};

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: profile } = useQuery<ProfileData>(
    ['profile', userId],
    async () => {
      const { data } = await api.get(`/profile/${userId}`);
      return data?.profile ?? {};
    },
    {
      enabled: !!userId,
    }
  );

  console.log(profile);

  return (
    <HomeContainer>
      {!!profile ? (
        <>
          <ProfileRatings />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </HomeContainer>
  );
};

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Profile">{page}</DefaultLayout>;
};

export default ProfilePage;
