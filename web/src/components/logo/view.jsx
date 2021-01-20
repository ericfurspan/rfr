import React from 'react';

import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { StyledLogoImg } from './style';

const Logo = ({ image, width = 60, height = 60, margin }) => (
  <StyledLogoImg
    src={imageUrlFor(buildImageObj(image)).url()}
    alt={image.alt || 'Brand logo'}
    margin={margin}
    width={width}
    height={height}
  />
);

export default Logo;
