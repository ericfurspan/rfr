import React from 'react';

import { StyledLink, StyledTitle, StyledContent, StyledCaption } from './style';
import { Typography } from '..';

const ContentPreview = ({ title, text, caption, linkTo }) => (
  <>
    <StyledLink to={linkTo}>
      <StyledTitle css={Typography.responsiveTitle3}>
        {title}
      </StyledTitle>

      {caption && (
        <StyledCaption css={Typography.small}>
          {caption}
        </StyledCaption>
      )}

      {text && (
        <StyledContent css={Typography.small}>
          {text}
        </StyledContent>
      )}
    </StyledLink>

  </>
);

export default ContentPreview;