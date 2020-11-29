import React from 'react';

import { StyledLink, StyledTitle, StyledContent, StyledCaption } from './style';
import { Typography } from '..';

const PreviewItem = ({ title, text, caption, linkTo }) => (
  <>
    <StyledLink to={linkTo}>
      <StyledTitle css={Typography.responsiveTitle4}>
        {title}
      </StyledTitle>
    </StyledLink>

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
  </>
);

export default PreviewItem;
