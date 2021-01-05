import React from 'react';
import { Link } from 'gatsby';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { Box, TeamMemberPreview, ContentPreview, Typography, boxProps } from '..';
import { StyledGrid, StyledImageContainer, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewNodes = ({ title, subtitle, image, nodes, nodeType = 'generic', browseMoreHref, browseMoreText, alignTitle = 'center', ...rest }) => {
  return (
    <Box {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .url()}
            alt={image.alt || `Section preview image`}
          />
        </StyledImageContainer>
      )}

      {title && (
        <Box mb='2em' ta={alignTitle}>
          <h2 css={Typography.responsiveTitle2}>
            {title}
          </h2>
          {subtitle && (
            <span css={Typography.base}>{subtitle}</span>
          )}
        </Box>
      )}

      {nodes.length > 0 ? (
        <>
          <StyledGrid>
            {nodes.map(node => (
              <li key={node.id}>
                {nodeType === 'teamMember' && <TeamMemberPreview {...node} />}
                {nodeType === 'generic' && <ContentPreview {...node} />}
              </li>
            ))}
          </StyledGrid>

          {browseMoreHref && (
            <StyledBrowseMore css={Typography.small}>
              <Link to={browseMoreHref}>{browseMoreText}</Link>
            </StyledBrowseMore>
          )}
        </>
      ) : (
        <StyledEmptyNodesText css={Typography.small}>
          Missing content
        </StyledEmptyNodesText>
      )}
    </Box>
  );
};

PreviewNodes.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: '',
};

export default PreviewNodes;
