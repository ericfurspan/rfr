import React from 'react';

import { Header, Footer } from '..';
import { StyledContent } from './style';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBanner, contactInfo, allPages, headerBgColor, headerTextColor }) => (
  <>
    <Header
      siteTitle={siteTitle}
      siteLogo={siteLogo}
      siteBanner={siteBanner}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      allPages={allPages}
      headerBgColor={headerBgColor}
      headerTextColor={headerTextColor}
    />
    <StyledContent>{children}</StyledContent>
    <Footer
      siteTitle={siteTitle}
      contactInfo={contactInfo}
      allPages={allPages}
      siteLogo={siteLogo}
    />
  </>
);

export default Layout;
