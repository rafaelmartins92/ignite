import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import { ExternalLink } from '../../../../components/ExternalLink';

import { PostHeaderContainer } from './styles';

export function PostHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
          text="Back"
          onClick={goBack}
        />
        <ExternalLink text="Read on Github" href="#" target="_blank" />
      </header>

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        voluptatem.
      </h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />1 day ago
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comments
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
