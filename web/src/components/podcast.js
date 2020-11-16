import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../lib/helpers';
import BlockText from './block-text';

import { responsiveTitle2 } from './typography.module.css';
import styles from './podcast.module.css';

const Podcast = ({ title, _rawDescription, availablePlatforms }) => (
  <div className={styles.root}>
    {title && (
      <h2 className={cn(responsiveTitle2, styles.title)}>
        <span>{title}</span>
      </h2>
    )}

    {_rawDescription && (
      <BlockText blocks={_rawDescription} />
    )}

    <div className={styles.card}>
      {availablePlatforms.map((platform) => (
        <div key={platform.url} className={styles.item}>
          {platform.icon && <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} className={styles.icon} />}
          <a href={platform.url}>{platform.linkText}</a>
        </div>
      ))}
    </div>
  </div>
);

export default Podcast;
