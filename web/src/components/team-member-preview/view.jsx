import React from 'react';
import { buildImageObj, getTeamMemberUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import { Typography } from '..';
import { StyledLink, StyledThumbnail, StyledHeader, StyledCertifications } from './style';

const TeamMemberPreview = ({ slug, person, certifications }) => (
  <>
    <StyledLink to={getTeamMemberUrl(slug.current)}>
      <StyledThumbnail>
        {person.image && person.image.asset && (
          <img
            src={imageUrlFor(buildImageObj(person.image))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={person.image.alt || `Avatar for ${person.name}`}
          />
        )}
      </StyledThumbnail>
      <StyledHeader css={Typography.responsiveTitle4}>
        {person.name}
      </StyledHeader>
    </StyledLink>

    {certifications && (
      <StyledCertifications css={Typography.small}>
        {certifications.join(', ')}
      </StyledCertifications>
    )}
  </>
);

export default TeamMemberPreview;
