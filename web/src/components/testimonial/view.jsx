import { format } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';

import { getTestimonialUrl } from '../../lib/helpers';
import { Typography, Box, BackBtn } from '..';
import { StyledWrapper, StyledBlockquote, StyledFigure, StyledCitation } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonial = ({ reviewer, reviewedAt, text, previewMode = false, slug }) => {
  const quoteContent = previewMode ? `${text.slice(0, 250)}...` : text;

  return (
    <>
      <Box mb='4rem'>
        <BackBtn linkTo='/testimonials' linkText='All testimonials' />
      </Box>

      <StyledWrapper>
        {!previewMode && (
          <h2 css={Typography.responsiveTitle2}>
            Testimonial
          </h2>
        )}
        <StyledFigure>
          <StyledBlockquote>
            <span>{'\u201C'}{quoteContent}{'\u201D'}</span>

            <StyledCitation>
              <cite>{`by ${reviewer}`}</cite>
              <Box flex ai='center'>
                <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                <span>{format(reviewedAt, 'DD MMMM YYYY')}</span>
              </Box>
            </StyledCitation>

            {previewMode && (
              <Link to={getTestimonialUrl(reviewedAt, slug)}>
                Read full testimonial
              </Link>
            )}
          </StyledBlockquote>
        </StyledFigure>
      </StyledWrapper>
    </>
  );
};

export default Testimonial;
