import { Link } from 'gatsby';
import React from 'react';
import { Product, Typography, Box, boxProps } from '..';
import { StyledHeading } from './style';

const Products = ({ nodes, title, subtitle, browseMoreHref, browseMoreText, ...rest }) => (
  <Box {...boxProps(rest)}>
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
    <Box d='grid' gtc='repeat(auto-fit, minmax(300px, 1fr))' gg='2em'>
      {nodes.map((node) => (
        <Box ta='left' m='auto' key={node.id}>
          <Product {...node} previewMode />
        </Box>
      ))}
    </Box>
    {browseMoreHref && (
      <Box mt='2rem' ta='right' css={Typography.small}>
        <Link to={browseMoreHref}>{browseMoreText}</Link>
      </Box>
    )}
  </Box>

);

export default Products;
