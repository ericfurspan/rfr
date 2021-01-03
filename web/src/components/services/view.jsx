import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box, Typography, boxProps, BlockContent } from '..';
import { StyledGrid, StyledIconContainer, StyledService, StyledServiceBody, StyledBrowseMore } from './style';

const Services = ({ title, subtitle, nodes, browseMoreHref, browseMoreText, previewMode, ...rest }) => {
  return (
    <Box ta='center' {...boxProps(rest)}>
      {title && (
        <Box mb='3em'>
          <h2 css={Typography.responsiveTitle2}>
            {title}
          </h2>
          {subtitle && (
            <span css={Typography.base}>{subtitle}</span>
          )}
        </Box>
      )}

      <StyledGrid>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <StyledService>
              {node.icon && (
                <StyledIconContainer>
                  <FontAwesomeIcon icon={[node.icon.faPackage, node.icon.faIconName]} />
                </StyledIconContainer>
              )}

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
