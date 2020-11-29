import React from 'react';

import { Header, Footer } from '..';
import { StyledContent } from './style';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBanner, contactInfo, allPages }) => (
  <>
    <Header
      siteTitle={siteTitle}
      siteLogo={siteLogo}
      siteBanner={siteBanner}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      allPages={allPages}
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
