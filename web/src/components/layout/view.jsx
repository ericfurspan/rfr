import React from 'react';

import { Header, Footer } from '..';
import { StyledContent } from './style';

const Layout = ({ children, onHideNav, onShowNav, showNav, allPages, companyProps, bannerProps, jumbotronProps, ...layoutProps }) => (
  <>
    <Header
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      allPages={allPages}
      companyProps={companyProps}
      bannerProps={bannerProps}
      jumbotronProps={jumbotronProps}
      {...layoutProps}
    />
    <StyledContent>{children}</StyledContent>
    <Footer
      companyProps={companyProps}
      allPages={allPages}
    />
  </>
);

export default Layout;
