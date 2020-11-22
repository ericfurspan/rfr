import React from 'react';

import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { StyledLogo } from './style';

const Logo = ({ image, width = 50, height = 50 }) => (
  <StyledLogo
    src={imageUrlFor(buildImageObj(image)).url()}
    alt={image.alt || 'Brand logo'}
    width={width}
    height={height}
  />
);

export default Logo;
