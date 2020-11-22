import React from 'react';
import { Link } from 'gatsby';
import { cn } from '../../lib/helpers';
import { TeamMemberPreview, PreviewItem, Typography } from '..';
import { StyledWrapper, StyledGrid, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewGrid = ({ title, nodes, nodeType = 'default', browseMoreHref, browseMoreText, withStyledTitle }) => {
  const titleStyles = withStyledTitle ? cn(Typography.small, Typography.subtitle) : Typography.responsiveTitle2;
  const titleText = withStyledTitle ? `${title} (${nodes.length})` : title;

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

PreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: ''
};

export default PreviewGrid;
