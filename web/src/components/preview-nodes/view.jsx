import React from 'react';
import { Link } from 'gatsby';
import { Box, TeamMemberPreview, ContentPreview, Typography, boxProps } from '..';
import { StyledGrid, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewNodes = ({ title, subtitle, nodes, nodeType = 'generic', browseMoreHref, browseMoreText, alignTitle = 'center', ...rest }) => {
  return (
    <Box {...boxProps(rest)}>
      {title && (
        <Box mb='3em' ta={alignTitle}>
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
          No content
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
