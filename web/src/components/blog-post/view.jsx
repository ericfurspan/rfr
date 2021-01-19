import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Container, RoleList, BlockContent, Typography, Box } from '..';

import { StyledArticle, StyledCoverPhoto, StyledGrid, StyledMainContent, StyledPublishDate } from './style';

const BlogPost = ({ _rawBody, authors, title, coverPhoto, publishedAt }) => (
  <StyledArticle>
    {coverPhoto && coverPhoto.asset && (
      <StyledCoverPhoto>
        <img
          src={imageUrlFor(buildImageObj(coverPhoto))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .url()}
          alt={coverPhoto.alt || 'Cover photo'}
        />
      </StyledCoverPhoto>
    )}
    <Container>
      <StyledGrid>
        <StyledMainContent>
          <h1 css={Typography.responsiveTitle1}>{title}</h1>
          <StyledPublishDate css={Typography.small}>
            <Box d='inline' mr='0.5em'>
              <FontAwesomeIcon icon='calendar-day' />
            </Box>
            {publishedAt && (
              differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')
            )}
          </StyledPublishDate>
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </StyledMainContent>
        {authors && <aside>
          <RoleList title='Authors' items={authors} listType='teamMember' />
        </aside>}
      </StyledGrid>
    </Container>
  </StyledArticle>
);

export default BlogPost;
