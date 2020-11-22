import React from 'react';

import { StyledLink, StyledTitle, StyledCaption } from './style';
import { Typography } from '..';

const PreviewItem = ({ title, linkTo, caption }) => (
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
  </>
);

export default PreviewItem;
