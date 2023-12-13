import { ProfileData } from '@/pages/profile/[id]';
import { BookOpen, BookmarkSimple, Books, UserList } from '@phosphor-icons/react';

import { Avatar } from '../ui/Avatar';
import { Heading, Text } from '../Typography';

import { ProfileDetailItem } from './ProfileDetailItem';
import { Container, ProfileDetailsWrapper, UserInfo } from './styles';

type ProfileDetailsProsp = {
  profile: ProfileData;
};

export const ProfileDetails = ({ profile }: ProfileDetailsProsp) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear();

  return (
    <Container>
      <UserInfo>
        <Avatar size="lg" alt={profile.user.name} src={profile.user.avatar_url} />
        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>
        <Text size="sm" color="gray-400">
          member since {memberSinceYear}
        </Text>
      </UserInfo>

      <ProfileDetailsWrapper>
        <ProfileDetailItem icon={<BookOpen />} info={profile.readPages} label="Pages read" />
        <ProfileDetailItem icon={<Books />} info={profile.ratedBooks} label="Reviewed books" />
        <ProfileDetailItem icon={<UserList />} info={profile.readAuthors} label="Read authors" />
        {profile?.mostReadCategory && (
          <ProfileDetailItem icon={<BookmarkSimple />} info={profile.mostReadCategory} label="Most read category" />
        )}
      </ProfileDetailsWrapper>
    </Container>
  );
};
