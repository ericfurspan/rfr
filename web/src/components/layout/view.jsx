import React from 'react';

import { Header, Footer } from '..';
import { NavMenu } from '../nav-menu';
import { StyledMainContent } from './style';

const Layout = ({ children, allPages, companyProps, bannerProps, jumbotronProps, ...layoutProps }) => (
  <>
    <NavMenu pages={allPages} companyName={companyProps.companyName} />
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
    />
  </>
);

export default Layout;
