import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, BlockContent, Typography, BackBtn } from '..';

import { StyledHeader, StyledMainContent, StyledTitle, StyledPublishDate, StyledSourceName, StyledStoryLink } from './style';

const PressPost = ({ title, source, url, _rawExcerpt, publishedAt }) => (
  <article>
    <Box maxw='1250px' p='2em'>
      <BackBtn linkTo='/news' linkText='All news' />
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
          {source && <StyledSourceName>{`From ${source}`}</StyledSourceName>}
        </div>
      </StyledMainContent>
    </Box>
  </article>
);

export default PressPost;
