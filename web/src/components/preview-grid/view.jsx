import React from 'react';
import { Link } from 'gatsby';
import { cn } from '../../lib/helpers';
import { Box, TeamMemberPreview, PreviewItem, Typography, boxProps } from '..';
import { StyledGrid, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewGrid = ({ title, nodes, nodeType = 'default', browseMoreHref, browseMoreText, withStyledTitle, ...rest }) => {
  const titleStyles = withStyledTitle ? cn(Typography.small, Typography.subtitle) : Typography.responsiveTitle2;
  const titleText = withStyledTitle ? `${title} (${nodes.length})` : title;

  return (
    <Box mb='2em' {...boxProps(rest)}>
      {title && <h2 css={titleStyles}>{titleText}</h2>}
      {nodes.length > 0 ? (
        <>
          <StyledGrid>
            {nodes.map(node => (
              <li key={node.id}>
                {nodeType === 'default' && <PreviewItem {...node} />}
                {nodeType === 'teamMember' && <TeamMemberPreview {...node} />}
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

PreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: '',
};

export default PreviewGrid;
