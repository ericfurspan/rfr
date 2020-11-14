import { Link } from 'gatsby';
import React from 'react';
import { cn } from '../../lib/helpers';

import { responsiveTitle2, small, subtitle } from '../typography.module.css';
import styles from './grid.module.css';
import PreviewItem from './item';

function PreviewGrid (props) {
  const titleStyles = props.withStyledTitle ? cn(small, subtitle) : responsiveTitle2;
  const titleText = props.withStyledTitle ? `${props.title} (${props.nodes.length})` : props.title;

  return (
    <div className={styles.root}>
      {props.title && <h2 className={titleStyles}>{titleText}</h2>}

      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <PreviewItem {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>{props.browseMoreText}</Link>
        </div>
      )}
    </div>
  );
}

PreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
};

export default PreviewGrid;
