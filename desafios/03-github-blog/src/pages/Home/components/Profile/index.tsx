import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { ExternalLink } from '../../../../components/ExternalLink';

import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/rafaelmartins92.png" />

      <ProfileDetails>
        <header>
          <h1>Rafael Martins</h1>
          <ExternalLink
            text="Github"
            href="https://github.com/rafaelmartins92"
          />
        </header>
        <p>
          Front-end Developer | JavaScript | TypeScript | React JS | Next.js |
          Tailwind | Styled Components | SASS | CSS | HTML |
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            rafaelmartins92
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Deal Technologies
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            137 followers
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
