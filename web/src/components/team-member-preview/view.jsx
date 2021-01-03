import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildImageObj, getTeamMemberUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import { Typography, Box } from '..';
import { StyledLink, StyledThumbnail, StyledHeader, StyledCertifications } from './style';

const TeamMemberPreview = ({ slug, person, certifications }) => (
  <Box ta='center' mb='2em'>
    <StyledLink to={getTeamMemberUrl(slug.current)}>
      <StyledThumbnail>
        {person.image && person.image.asset && (
          <img
            src={imageUrlFor(buildImageObj(person.image))
              .url()}
            alt={person.image.alt || `Avatar for ${person.name}`}
          />
        )}
      </StyledThumbnail>
    </StyledLink>

    <StyledHeader css={Typography.responsiveTitle3}>
      {person.name}
    </StyledHeader>

    {certifications && (
      <StyledCertifications css={Typography.small}>
        {certifications.join(', ')}
      </StyledCertifications>
    )}

    {person.contact && person.contact.socialMedia.map((platform) => (
      <Box d='inline-block' m='1em' p='0.5em' bdr='100%' br='var(--color-black)' key={platform.url}>
        <a href={platform.url} target='_blank' rel='noreferrer noopener'>
          <FontAwesomeIcon
            icon={[platform.icon.faPackage, platform.icon.faIconName]}
            color='var(--color-white)'
            size='lg'
            fixedWidth
          />
        </a>
      </Box>
    ))}
  </Box>
);

export default TeamMemberPreview;
