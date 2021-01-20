import React from 'react';
import { Box, BlockContent, Typography, boxProps } from '..';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { StyledImageContainer } from './style';

const Mission = ({ _rawMission, title, subtitle, image, ...rest }) => {
  return (
    <Box flex col ai='center' ta='center' {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(200)
              .height(200)
              .url()}
            alt={image.alt || `Mission statement image`}
          />
        </StyledImageContainer>
      )}
      <Box>
        <h2 css={Typography.title2}>
          {title}
        </h2>
        {subtitle && (
          <span css={Typography.base}>{subtitle}</span>
        )}
      </Box>
      <Box>
        <BlockContent blocks={_rawMission} />
      </Box>
    </Box>
  );
};

export default Mission;
