import React, { useState } from 'react';
import { Header, Footer } from '..';
import { NavMenu } from '../nav-menu';
import { StyledBackdrop, StyledMainContent } from './style';

const Layout = ({ children, allPages, location, companyProps, themeProps, bannerProps, jumbotronProps }) => {
  const [ hasBackdrop, toggleBackdrop ] = useState(false);

  return (
    <StyledBackdrop hasBackdrop={hasBackdrop}>
      <NavMenu
        pages={allPages}
        companyName={companyProps.companyName}
        logo={companyProps.logo}
        currentPath={location.pathname}
        toggleBackdrop={() => toggleBackdrop(!hasBackdrop)}
        {...themeProps}
      />
      <Header
        companyProps={companyProps}
        bannerProps={bannerProps}
        jumbotronProps={jumbotronProps}
        currentPath={location.pathname}
      />
      <StyledMainContent>
        {children}
      </StyledMainContent>
      <Footer
        companyProps={companyProps}
        allPages={allPages}
        {...themeProps}
      />
    </StyledBackdrop>
  );
};

export default Layout;
