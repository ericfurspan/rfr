import { Link } from 'gatsby';
import React from 'react';
import { Service } from '../service';

import { StyledGrid, StyledBrowseMore } from './style';
import { Box, Typography, boxProps } from '..';

const ServicesGrid = ({ title, nodes, browseMoreHref, browseMoreText, previewOnly, ...rest }) => {
  return (
    <Box mb='2em' mt='4em' {...boxProps(rest)}>
      {title && <h2 css={Typography.responsiveTitle2}>{title}</h2>}

      <StyledGrid>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <Service {...node} preview={previewOnly} />
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

ServicesGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: '',
  previewOnly: false,
};

export default ServicesGrid;
