import React from 'react';

import { StyledRoot } from './style';

const Container = ({ children, centered = false, noPadding = false }) => {
  return (
    <StyledRoot centered={centered} noPadding={noPadding}>
      {children}
    </StyledRoot>
  );
};

export default Container;
