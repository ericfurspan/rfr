import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../lib/helpers';

import { responsiveTitle2, small } from './typography.module.css';
import styles from './podcast.module.css';

const Podcast = ({ title, description, platforms }) => (
  <div className={styles.root}>
    {title && (
      <h2 className={cn(responsiveTitle2, styles.title)}>
        <span>{title}</span>
      </h2>
    )}
    {description && <h2 className={cn(small, styles.description)}>{description}</h2>}
    <div className={styles.card}>
      {platforms.map((platform) => (
        <div key={platform.url} className={styles.item}>
          {platform.icon && <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} className={styles.icon} />}
          <a href={platform.url}>{platform.linkText}</a>
        </div>
      ))}
    </div>
  </div>
);

export default Podcast;
