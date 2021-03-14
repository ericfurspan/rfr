import React from 'react';
import { Link } from 'gatsby';
import LazyLoad from 'react-lazyload';
import { buildImageObj, getSuccessStoryUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Typography, Box, BlockContent } from '..';
import { StyledLink, StyledThumbnail, StyledHeader } from './style';

const SuccessStoryPreview = ({ title, _rawText, image, slug }) => {
  return (
    <Box ta='center' mb='2em'>
      <StyledLink to={getSuccessStoryUrl(slug.current)} aria-label='Avatar of story author'>
        <StyledThumbnail>
          {image && image.asset && (
            <LazyLoad height={200} once>
              <img
                src={imageUrlFor(buildImageObj(image))
                  .width(200)
                  .dpr(3)
                  .format('webp')
                  .url()}
                alt='Avatar of story author'
              />
            </LazyLoad>
          )}
        </StyledThumbnail>
      </StyledLink>

      <Link to={getSuccessStoryUrl(slug.current)}>
        <StyledHeader css={Typography.responsiveTitle3}>
          {title}
        </StyledHeader>
        {_rawText && <BlockContent blocks={_rawText} />}
      </Link>
    </Box>
  );
};

export default SuccessStoryPreview;
