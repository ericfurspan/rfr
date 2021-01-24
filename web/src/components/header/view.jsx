import React from 'react';
import { Link } from 'gatsby';
import { BlockContent, Logo, NavMenu } from '..';

import {
  StyledHeader,
  StyledAttentionBanner,
  StyledTitle,
} from './style';

const Header = ({ currentPath, companyProps, bannerProps, jumbotronProps, themeProps, allPages, hasBackdrop, toggleBackdrop }) => {
  const { logo, companyName } = companyProps;

  return (
    <StyledHeader
      currentPath={currentPath}
      hasBanner={bannerProps && bannerProps.isEnabled}
      headerTextColor={jumbotronProps.headerTextColor}
    >
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

      <NavMenu
        pages={allPages}
        currentPath={location.pathname}
        toggleBackdrop={() => toggleBackdrop(!hasBackdrop)}
        navMenuFg={themeProps.navMenuFg}
        navMenuBg={themeProps.navMenuBg}
      />
    </StyledHeader>
  );
};

export default Header;
