import React from 'react';
import styled from 'styled-components';

import { buildImageObj } from '../../../lib/helpers';
import { imageUrlFor } from '../../../lib/image-url';

import { Typography } from '../..';

const StyledFigure = styled.figure`
  margin: 2rem 0;
  padding: 0;

  & img {
    width: 100%;
    height: auto;
  }
`;

const StyledCaption = styled.figcaption`
  margin-top: 0.5rem;
`;

const Figure = (props) => (
  <StyledFigure>
    {props.asset && (
      <img
        src={imageUrlFor(buildImageObj(props)).width(1200).url()}
        alt={props.alt || props.caption}
      />
    )}
    <StyledCaption css={Typography.small}>{props.caption}</StyledCaption>
  </StyledFigure>
);

export default Figure;
