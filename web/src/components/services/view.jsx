import { Link } from 'gatsby';
import React from 'react';

import { Box, Typography, boxProps, BlockContent } from '..';
import { StyledGrid, StyledService, StyledServiceBody, StyledBrowseMore } from './style';

const Services = ({ title, nodes, browseMoreHref, browseMoreText, previewMode, ...rest }) => {
  return (
    <Box mb='2em' mt='4em' ta='center' {...boxProps(rest)}>
      {title && <h2 css={Typography.responsiveTitle2}>
        {title}
      </h2>}

      <StyledGrid>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <StyledService>
              <h3 css={Typography.responsiveTitle3}>
                {node.title}
              </h3>

              {node._rawSubtitle && (
                <BlockContent blocks={node._rawSubtitle} />
              )}

              {!previewMode && (
                <StyledServiceBody>
                  {node._rawBody && (
                    <BlockContent blocks={node._rawBody} />
                  )}
                </StyledServiceBody>
              )}
            </StyledService>
          </li>
        ))}
      </StyledGrid>

      {browseMoreHref && (
        <StyledBrowseMore css={Typography.small}>
          <Link to={browseMoreHref}>{browseMoreText}</Link>
        </StyledBrowseMore>
      )}
    </Box>
  );
};

Services.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: '',
  previewMode: false,
};

export default Services;
