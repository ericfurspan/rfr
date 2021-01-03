import React from 'react';
import { Link } from 'gatsby';
import { BlockContent, Logo } from '..';
import { NavMenu } from '../nav-menu';

import {
  StyledHeader,
  StyledAttentionBanner,
  StyledTitle,
} from './style';

const Header = ({ allPages = [], companyProps, bannerProps, jumbotronProps, ...layoutProps }) => {
  const { logo, companyName } = companyProps;

  return (
    <StyledHeader {...jumbotronProps} {...layoutProps}>
      {bannerProps && bannerProps.isEnabled && (
        <StyledAttentionBanner {...bannerProps}>
          <BlockContent blocks={bannerProps._rawBannerText} />
        </StyledAttentionBanner>
      )}

      <NavMenu pages={allPages} companyName={companyName} />

      <StyledTitle>
        <Link to='/'>{companyName}</Link>
      </StyledTitle>

      {(logo && logo.asset) && (
        <Logo image={logo} />
      )}
    </StyledHeader>
  );
};

export default Header;
