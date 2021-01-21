import React from 'react';

import { StyledRoot } from './style';

const Container = ({ children, centered = false, noPadding = false, fullWidth = false }) => {
  return (
    <StyledRoot centered={centered} noPadding={noPadding} fullWidth={fullWidth}>
      {children}
    </StyledRoot>
  );
};

export default Container;
