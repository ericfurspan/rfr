import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { RoleList, BlockContent, BackBtn, Typography, Box } from '..';

import { StyledCoverPhoto, StyledGrid } from './style';

const BlogPost = ({ _rawBody, authors, title, coverPhoto, publishedAt }) => (
  <article>
    {coverPhoto && coverPhoto.asset && (
      <StyledCoverPhoto>
        <img
          src={imageUrlFor(buildImageObj(coverPhoto))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .format('webp')
            .url()}
          alt={coverPhoto.alt || 'Cover photo'}
        />
      </StyledCoverPhoto>
    )}
    <Box maxw='1250px' p='2em'>
      <BackBtn linkTo='/news' linkText='All news' />
      <StyledGrid>
        <Box mb='2em'>
          <Box m='1.5rem 0 3rem'>
            <h1 css={Typography.responsiveTitle1}>{title}</h1>
            <div css={Typography.small}>
              <Box d='inline' mr='0.5em'>
                <FontAwesomeIcon icon='calendar-day' />
              </Box>
              {publishedAt && (
                differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')
              )}
            </div>
            <span css={Typography.micro}>Blog Post</span>
          </Box>
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </Box>
        {authors && <aside>
          <RoleList title='Authors' items={authors} listType='teamMember' />
        </aside>}
      </StyledGrid>
    </Box>
  </article>
);

export default BlogPost;
