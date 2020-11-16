import React from 'react';
import { Link } from 'gatsby';
import { cn } from '../../lib/helpers';

import { responsiveTitle2, small, subtitle } from '../typography.module.css';
import styles from './grid.module.css';
import PreviewItem from './item';

const PreviewGrid = ({ title, nodes, browseMoreHref, browseMoreText, withStyledTitle }) => {
  const titleStyles = withStyledTitle ? cn(small, subtitle) : responsiveTitle2;
  const titleText = withStyledTitle ? `${title} (${nodes.length})` : title;

  return (
    <div className={styles.root}>
      {title && <h2 className={titleStyles}>{titleText}</h2>}
      {nodes.length > 0 ? (
        <>
          <ul className={styles.grid}>
            {nodes.map(node => (
              <li key={node.id}>
                <PreviewItem {...node} />
              </li>
            ))}
          </ul>

          {browseMoreHref && (
            <div className={styles.browseMoreNav}>
              <Link to={browseMoreHref}>{browseMoreText}</Link>
            </div>
          )}
        </>
      ) : (
        <span className={cn(small, styles.emptyNodesText)}>No content</span>
      )}
    </div>
  );
};

PreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: ''
};

export default PreviewGrid;
