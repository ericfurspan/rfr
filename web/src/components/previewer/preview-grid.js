import { Link } from 'gatsby';
import React from 'react';
import { cn } from '../../lib/helpers';

import { responsiveTitle2, responsiveTitle4, subtitle } from '../typography.module.css';
import styles from './preview-grid.module.css';
import PreviewItem from './preview-item';

function PreviewGrid (props) {
  const titleStyles = props.withSubtitleStyle ? cn(responsiveTitle4, subtitle) : responsiveTitle2;

  return (
    <div className={styles.root}>
      {props.title && <h2 className={titleStyles}>{props.title}</h2>}

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
