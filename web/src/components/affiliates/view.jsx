import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { StyledGrid } from './style';
import { Box, boxProps, Typography } from '..';

const Affiliates = ({ title, nodes, ...rest }) => {
  return (
    <Box mb='2em' mt='4em' ta='center' {...boxProps(rest)}>
      {title && <h2 css={Typography.responsiveTitle2}>
        {title}
      </h2>}

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
