import React from 'react';

import { ListItem } from './components';
import { Typography } from '..';
import { StyledWrapper, StyledTitle, StyledList } from './style';

const RoleList = ({ title, items, listType }) => (
  <StyledWrapper>
    <StyledTitle css={Typography.base}>{title}</StyledTitle>
    <StyledList>
      {items.map((item) => (
        <ListItem item={item} type={listType} key={item._id} />
      ))}
    </StyledList>
  </StyledWrapper>
);

export default RoleList;
