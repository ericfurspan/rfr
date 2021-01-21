import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, BlockContent, Typography, BackBtn } from '..';

import { StyledTitle, StyledSourceName, StyledStoryLink } from './style';

const PressPost = ({ title, source, storyLink, _rawExcerpt, publishedAt }) => (
  <article>
    <Box maxw='1250px' p='2em'>
      <BackBtn linkTo='/news' linkText='All news' />
      <Box m='1.5rem 0 3rem'>
        <StyledTitle css={Typography.responsiveTitle1}>{title}</StyledTitle>
        <div css={Typography.small}>
          <Box d='inline' mr='0.5em'>
            <FontAwesomeIcon icon='calendar-day' />
          </Box>
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? distanceInWords(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), 'MMMM Do YYYY')}
        </div>
        <span css={Typography.micro}>Press Release</span>
      </Box>
      <>
        {_rawExcerpt && (
          <Box mb='2em'>
            <BlockContent blocks={_rawExcerpt} />
          </Box>
        )}
        {storyLink && (
          <>
            <StyledStoryLink href={storyLink.url} target='_blank' rel='noreferrer noopener'>
              <span>{storyLink.linkText || 'Click here for the full story'}</span>
              {storyLink.icon ? (
                <FontAwesomeIcon icon={[storyLink.icon.faPackage, storyLink.icon.faIconName]} />
              ) : (
                <FontAwesomeIcon icon='arrow-alt-circle-right' />
              )}
            </StyledStoryLink>
            {source && <StyledSourceName>{`From ${source}`}</StyledSourceName>}
          </>
        )}
      </>
    </Box>
  </article>
);

export default PressPost;
