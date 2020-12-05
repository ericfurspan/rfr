import { format } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';

import { getReviewUrl } from '../../lib/helpers';
import { Typography } from '..';
import { StyledWrapper, StyledBlockquote, StyledFigure, StyledCitation } from './style';

const Review = ({ reviewer, reviewedAt, text, previewMode = false, slug }) => {
  const quoteContent = previewMode ? `${text.slice(0, 250)}...` : text;

  return (
    <StyledWrapper>
      {!previewMode && (
        <h2 css={Typography.responsiveTitle2}>
          Testimonial
        </h2>
      )}
      <StyledFigure>
        <StyledBlockquote css={Typography.blockQuote}>
          <span>{'\u201C'}{quoteContent}{'\u201D'}</span>
          {previewMode && (
            <>
              <br /> <br />
              <Link to={getReviewUrl(reviewedAt, slug)}>
                Read full review
              </Link>
            </>
          )}
        </StyledBlockquote>

        <StyledCitation css={Typography.small}>
          <cite>by {reviewer}</cite>
          <br />
          {format(reviewedAt, 'DD MMMM YYYY')}
        </StyledCitation>

      </StyledFigure>
    </StyledWrapper>
  );
};

export default Review;
