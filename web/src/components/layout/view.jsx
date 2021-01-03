import React from 'react';

import { Header, Footer } from '..';
import { NavMenu } from '../nav-menu';
import { StyledMainContent } from './style';

const Layout = ({ children, allPages, companyProps, themeProps, bannerProps, jumbotronProps, ...layoutProps }) => (
  <>
    <NavMenu
      pages={allPages}
      companyName={companyProps.companyName}
      {...themeProps}
    />
    <Header
      allPages={allPages}
      companyProps={companyProps}
      bannerProps={bannerProps}
      jumbotronProps={jumbotronProps}
      {...layoutProps}
    />
    <StyledMainContent>
      {children}
    </StyledMainContent>
    <Footer
      companyProps={companyProps}
      allPages={allPages}
      {...themeProps}
    />
  </>
);

export default Layout;
