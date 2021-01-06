import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, BlockContent, Typography } from '..';

import { StyledHeader, StyledMainContent, StyledTitle, StyledPublishDate, StyledSourceName, StyledStoryLink } from './style';
import { Box } from '../box';

const PressPost = ({ title, source, url, _rawExcerpt, publishedAt }) => (
  <article>
    <Container>
      <StyledHeader>
        <StyledTitle css={Typography.responsiveTitle1}>{title}</StyledTitle>
        <StyledPublishDate css={Typography.small}>
          <Box d='inline' mr='0.5em'>
            <FontAwesomeIcon icon='calendar-day' />
          </Box>
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? distanceInWords(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), 'MMMM Do YYYY')}
        </StyledPublishDate>
      </StyledHeader>
      <StyledMainContent>
        {_rawExcerpt && <BlockContent blocks={_rawExcerpt} />}
        <div>
          <StyledStoryLink href={url} target='_blank' rel='noreferrer noopener'>
            <span>Click here for the full story</span>
            <FontAwesomeIcon icon='arrow-alt-circle-right' />
          </StyledStoryLink>
          <StyledSourceName>{`From ${source}`}</StyledSourceName>
        </div>
      </StyledMainContent>
    </Container>
  </article>
);

export default PressPost;
