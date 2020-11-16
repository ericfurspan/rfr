import { Link } from 'gatsby';
import React from 'react';
import { cn } from '../../lib/helpers';

import styles from './item.module.css';
import { responsiveTitle4, small } from '../typography.module.css';

const PreviewItem = ({ title, linkTo, caption }) => (
  <>
    <Link className={styles.root} to={linkTo}>
      <h3 className={cn(responsiveTitle4, styles.title)}>{title}</h3>
    </Link>
    {caption && (
      <span className={cn(small, styles.caption)}>
        {caption}
      </span>
    )}
  </>
);

export default PreviewItem;
