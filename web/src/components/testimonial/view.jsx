import { format } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';

import { getTestimonialUrl } from '../../lib/helpers';
import { Typography } from '..';
import { StyledWrapper, StyledBlockquote, StyledFigure, StyledCitation } from './style';

const Testimonial = ({ reviewer, reviewedAt, text, previewMode = false, slug }) => {
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

          <StyledCitation css={Typography.small}>
            <cite>&nbsp;by {reviewer}</cite>
            <div>on {format(reviewedAt, 'DD MMMM YYYY')}</div>
          </StyledCitation>

          {previewMode && (
            <Link to={getTestimonialUrl(reviewedAt, slug)}>
              Read full testimonial
            </Link>
          )}
        </StyledBlockquote>
      </StyledFigure>
    </StyledWrapper>
  );
};

export default Testimonial;
