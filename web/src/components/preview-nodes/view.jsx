import React from 'react';
import { Link } from 'gatsby';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { Box, TeamMemberPreview, ContentPreview, SuccessStoryPreview, Typography, boxProps } from '..';
import { StyledGrid, StyledHeading, StyledImageContainer, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewNodes = ({ title, subtitle, image, nodes, nodeType = 'generic', browseMoreHref, browseMoreText, ...rest }) => {
  return (
    <Box {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .format('webp')
              .url()}
            alt={image.alt || `Section preview image`}
          />
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
        </StyledHeading>
      )}

      {nodes.length > 0 ? (
        <>
          <StyledGrid>
            {nodes.map(node => (
              <li key={node.id}>
                {nodeType === 'teamMember' && <TeamMemberPreview {...node} />}
                {nodeType === 'successStory' && <SuccessStoryPreview {...node} />}
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
