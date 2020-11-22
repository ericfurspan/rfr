import { Link } from 'gatsby';
import React from 'react';
import { Service } from '../service';

import { StyledWrapper, StyledGrid, StyledBrowseMore } from './style';
import { Typography } from '..';

const ServicesGrid = ({ title, nodes, browseMoreHref, browseMoreText, previewOnly }) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

ServicesGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: ''
};

export default ServicesGrid;
