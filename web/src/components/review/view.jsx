import { format } from 'date-fns';
import React from 'react';

import { Typography } from '..';

import { StyledWrapper, StyledTitle, StyledContent, StyledCaption } from './style';

const Review = ({ reviewer, reviewedAt, text }) => {
  return (
    <StyledWrapper>
      <StyledTitle css={Typography.responsiveTitle3}>
        {`Review by ${reviewer}`}
      </StyledTitle>

      <StyledContent>
        {text}
      </StyledContent>

      <StyledCaption css={Typography.small}>
        {format(reviewedAt, 'DD MMMM YYYY')}
      </StyledCaption>
    </StyledWrapper>
  );
};

export default Review;
