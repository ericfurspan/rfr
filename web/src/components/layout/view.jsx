import React, { useState } from 'react';
import { Header, Footer } from '..';
import { NavMenu } from '../nav-menu';
import { StyledMainContent } from './style';

const Layout = ({ children, allPages, location, companyProps, themeProps, bannerProps, jumbotronProps }) => {
  const [ hasBackdrop, toggleBackdrop ] = useState(false);

  return (
    <>
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
      <StyledMainContent hasBackdrop={hasBackdrop}>
        {children}
      </StyledMainContent>
      <Footer
        companyProps={companyProps}
        allPages={allPages}
        {...themeProps}
      />
    </>
  );
};

export default Layout;
