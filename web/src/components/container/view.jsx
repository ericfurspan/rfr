import React from 'react';

import { StyledRoot } from './style';

const Container = ({ children, centered }) => {
  return (
    <StyledRoot centered={centered}>
      {children}
    </StyledRoot>
  );
};

export default Container;
