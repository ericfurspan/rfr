import React from 'react';
import LazyLoad from 'react-lazyload';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { StyledLogoImg } from './style';

const Logo = ({ image, width = 60, height = 60, margin }) => (
  <LazyLoad height={height} style={{ display: 'flex' }} once>
    <StyledLogoImg
      src={imageUrlFor(buildImageObj(image)).format('webp').url()}
      alt={image.alt || 'Brand logo'}
      margin={margin}
      width={width}
      height={height}
    />
  </LazyLoad>
);

export default Logo;
