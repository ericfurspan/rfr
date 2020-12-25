import React from 'react';
import { Link } from 'gatsby';
import { Box, TeamMemberPreview, GenericPreview, Typography, boxProps } from '..';
import { StyledGrid, StyledBrowseMore, StyledEmptyNodesText } from './style';

const PreviewNodes = ({ title, nodes, nodeType = 'generic', browseMoreHref, browseMoreText, ...rest }) => {
  return (
    <Box mb='2em' ta='initial' {...boxProps(rest)}>
      {title && <h2 css={Typography.responsiveTitle2}>
        {title}
      </h2>}
      {nodes.length > 0 ? (
        <>
          <StyledGrid>
            {nodes.map(node => (
              <li key={node.id}>
                {nodeType === 'teamMember' && <TeamMemberPreview {...node} />}
                {nodeType === 'generic' && <GenericPreview {...node} />}
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
