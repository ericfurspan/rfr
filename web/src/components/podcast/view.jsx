import React from 'react';

import { BlockContent, Typography } from '..';
import { StyledWrapper, StyledTitle, StyledContainer, StyledItem, StyledFaIcon } from './style';

const Podcast = ({ title, _rawDescription, availablePlatforms }) => (
  <StyledWrapper>
    {title && (
      <StyledTitle css={Typography.responsiveTitle2}>
        <span>{title}</span>
      </StyledTitle>
    )}

    {_rawDescription && (
      <BlockContent blocks={_rawDescription} />
    )}

    <StyledContainer>
      {availablePlatforms.map((platform) => (
        <StyledItem key={platform.url}>
          {platform.icon && (
            <StyledFaIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
          )}
          <a href={platform.url}>{platform.linkText}</a>
        </StyledItem>
      ))}
    </StyledContainer>
  </StyledWrapper>
);

export default Podcast;
