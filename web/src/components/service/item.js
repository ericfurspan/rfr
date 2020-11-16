import React from 'react';
import { cn } from '../../lib/helpers';

import styles from './item.module.css';
import { responsiveTitle3 } from '../typography.module.css';
import BlockContent from '../block-content';
import BlockText from '../block-text';

const ServiceItem = ({ title, _rawSubtitle, _rawBody }) => {
  return (
    <div className={styles.root}>
      <h3 className={cn(responsiveTitle3, styles.title)}>
        {title}
      </h3>

      {_rawSubtitle && (
        <BlockText blocks={_rawSubtitle} />
      )}

      {_rawBody && (
        <BlockContent blocks={_rawBody} />
      )}
    </div>
  );
};

export default ServiceItem;
