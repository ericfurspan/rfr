import React from 'react';
import LazyLoad from 'react-lazyload';
import { Box, BlockContent, Typography, boxProps } from '..';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { StyledHeading, StyledImageContainer } from './style';

const Mission = ({ _rawMission, title, subtitle, image, ...rest }) => {
  return (
    <Box flex col ai='center' ta='center' {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <LazyLoad height={200} once>
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(200)
                .height(200)
                .format('webp')
                .url()}
              alt={image.alt || `Mission statement image`}
            />
          </LazyLoad>
        </StyledImageContainer>
      )}

      {title && (
        <StyledHeading hasSubtitle={!!subtitle}>
          <h2 css={Typography.title2}>
            {title}
          </h2>
          {subtitle && (
            <span css={Typography.base}>{subtitle}</span>
          )}
        </StyledHeading>)}
      <Box>
        <BlockContent blocks={_rawMission} />
      </Box>
    </Box>
  );
};

export default Mission;
