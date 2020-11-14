import { Link } from 'gatsby';
import React from 'react';
import { cn } from '../../lib/helpers';

import styles from './item.module.css';
import { responsiveTitle4, small } from '../typography.module.css';

function PreviewItem (props) {
  return (
    <>
      <Link className={styles.root} to={props.linkTo}>
        <h3 className={cn(responsiveTitle4, styles.title)}>{props.title}</h3>
      </Link>
      {props.caption && (
        <span className={cn(small, styles.caption)}>
          {props.caption}
        </span>
      )}
    </>
  );
}

export default PreviewItem;
