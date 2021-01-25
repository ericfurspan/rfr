import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BlockContent, Logo, NavMenu } from '..';

import {
  StyledHeader,
  StyledAttentionBanner,
  StyledTitle,
} from './style';

const Header = ({ currentPath, companyProps, bannerProps, jumbotronProps, themeProps, allPages, hasBackdrop, toggleBackdrop }) => {
  const [ bannerDismissed, setBannerDismissed ] = useState(false);

  const { logo, companyName } = companyProps;

  return (
    <StyledHeader
      currentPath={currentPath}
      hasBanner={bannerProps.isEnabled && !bannerDismissed}
      headerTextColor={jumbotronProps.headerTextColor}
    >
      {bannerProps.isEnabled && !bannerDismissed && (
        <StyledAttentionBanner {...bannerProps}>
          <BlockContent blocks={bannerProps._rawBannerText} />
          <FontAwesomeIcon
            icon={['fas', 'times']}
            className='banner-dismiss'
            onClick={() => setBannerDismissed(true)}
          />
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
