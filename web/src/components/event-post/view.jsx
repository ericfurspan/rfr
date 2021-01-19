import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Box, BlockContent, RoleList, Typography } from '..';

import { StyledCoverPhoto, StyledGrid, StyledMainContent, StyledEventDate } from './style';

const EventPost = ({ _rawBody, title, organizers, coverPhoto, eventAt }) => (
  <article>
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
    <Box maxw='1250px' p='2em'>
      <StyledGrid>
        <StyledMainContent>
          <h1 css={Typography.responsiveTitle1}>{title}</h1>
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </StyledMainContent>
        <aside>
          {eventAt && (
            <StyledEventDate css={Typography.small}>
              {differenceInDays(new Date(eventAt), new Date()) > 3
                ? distanceInWords(new Date(eventAt), new Date())
                : format(new Date(eventAt), 'MMMM Do YYYY')}
            </StyledEventDate>
          )}
          {organizers && <RoleList title='Organizers' items={organizers} listType='teamMember' />}
        </aside>
      </StyledGrid>
    </Box>
  </article>
);

export default EventPost;
