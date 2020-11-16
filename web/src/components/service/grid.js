import { Link } from 'gatsby';
import React from 'react';

import { responsiveTitle2 } from '../typography.module.css';
import styles from './grid.module.css';
import ServiceItem from './item';

const ServicesGrid = ({ title, nodes, browseMoreHref, browseMoreText }) => {
  return (
    <div className={styles.root}>
      {title && <h2 className={responsiveTitle2}>{title}</h2>}

      <ul className={styles.grid}>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <ServiceItem {...node} />
          </li>
        ))}
      </ul>
      {browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={browseMoreHref}>{browseMoreText}</Link>
        </div>
      )}
    </div>
  );
};

ServicesGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: ''
};

export default ServicesGrid;
