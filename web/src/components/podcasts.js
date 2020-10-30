import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../lib/helpers';

import { responsiveTitle4, small } from './typography.module.css';
import styles from './podcasts.module.css';

const Podcasts = ({ title, subtitle, items }) => (
  <div>
    {title && <h2 className={cn(responsiveTitle4, styles.title)}>
      <FontAwesomeIcon icon='podcast' />
      <span>{title}</span>
    </h2>}
    {subtitle && <h2 className={small}>{subtitle}</h2>}
    <div className={styles.card}>
      <div>
        {items.map((item) => (
          <div key={item.url}>
            {item.icon && <FontAwesomeIcon icon={[item.icon.faPackage, item.icon.faIconName]} className={styles.icon} />}
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Podcasts;
