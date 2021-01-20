import React from 'react';

import { BlockContent, Typography } from '..';
import { StyledTitle, StyledContainer, StyledItem, StyledFaIcon } from './style';

const Podcast = ({ title, _rawDescription, availablePlatforms }) => (
  <>
    {title && (
      <StyledTitle css={Typography.title3}>
        {title}
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
  </>
);

export default Podcast;
