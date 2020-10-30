import React from 'react';

import { responsiveTitle4, paragraph } from './typography.module.css';
import styles from './news.module.css';

const News = ({ title, items }) => (
  <div>
    {title && <h2 className={responsiveTitle4}>{title}</h2>}
    <div className={styles.card}>
      {items.map((item) => (
        <div key={item.url}>
          <h3>
            <a href={item.url}>{item.title}</a>
          </h3>
          <p className={paragraph}>{item.source}</p>
        </div>
      ))}
    </div>
  </div>
);

export default News;
