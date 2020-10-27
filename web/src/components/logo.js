import React from 'react';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';

import styles from './logo.module.css';

const Logo = ({ image }) => (
  <img
    src={imageUrlFor(buildImageObj(image)).url()}
    alt={image.alt}
    className={styles.logo}
  />
);

export default Logo;
