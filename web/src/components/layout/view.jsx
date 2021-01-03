import React from 'react';

import { Header, Footer } from '..';
import { StyledMainContent } from './style';

const Layout = ({ children, allPages, companyProps, bannerProps, jumbotronProps, ...layoutProps }) => (
  <>
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
