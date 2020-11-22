import React from 'react';

import { StyledJumbotron } from './style';
import { Typography } from '..';

const Jumbotron = ({ title, subtitle }) => {
  return (
    <StyledJumbotron>
      {title && <h2 css={Typography.responsiveTitle2}>{title}</h2>}
      <div>
        <p>{subtitle}</p>
        <button>Call to Action</button>
      </div>
    </StyledJumbotron>
  );
};

export default Jumbotron;
