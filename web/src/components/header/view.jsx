import React from 'react';
import { Link } from 'gatsby';
import { BlockContent, Logo } from '..';

import {
  StyledHeader,
  StyledAttentionBanner,
  StyledTitle,
} from './style';

const Header = ({ currentPath, companyProps, bannerProps, jumbotronProps }) => {
  const { logo, companyName } = companyProps;

  return (
    <StyledHeader {...jumbotronProps} currentPath={currentPath}>
      {bannerProps && bannerProps.isEnabled && (
        <StyledAttentionBanner {...bannerProps}>
          <BlockContent blocks={bannerProps._rawBannerText} />
        </StyledAttentionBanner>
      )}

      <StyledTitle>
        {(logo && logo.asset) && (
          <Logo image={logo} margin='0' />
        )}
        <Link to='/'>{companyName}</Link>
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;
