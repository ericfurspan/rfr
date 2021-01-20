import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { StyledHeading, StyledGrid, StyledImageContainer } from './style';
import { Box, boxProps, Typography } from '..';

const Affiliates = ({ title, subtitle, image, nodes, ...rest }) => {
  return (
    <Box ta='center' {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .url()}
            alt={image.alt || `Affiliates preview image`}
          />
        </StyledImageContainer>
      )}

      {title && (
        <StyledHeading hasSubtitle={!!subtitle}>
          <h2 css={Typography.title2}>
            {title}
          </h2>
          {subtitle && (
            <span css={Typography.small}>{subtitle}</span>
          )}
        </StyledHeading>
      )}

      <StyledGrid>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <a href={node.url} target='_blank' rel='noreferrer noopener'>
              {node.image && node.image.asset ? (
                <img
                  src={imageUrlFor(buildImageObj(node.image))
                    .width(250)
                    .fit('clip')
                    .url()}
                  alt={node.image.alt || `Affiliate image for ${node.name}`}
                />
              ) : (
                <h3 css={Typography.responsiveTitle3}>
                  {node.name}
                </h3>
              )}
            </a>
          </li>
        ))}
      </StyledGrid>
    </Box>
  );
};

export default Affiliates;
