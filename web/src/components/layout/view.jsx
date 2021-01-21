import React, { useState } from 'react';
import { Header, Footer } from '..';
import { StyledMainContent } from './style';

const Layout = ({ children, allPages, location, companyProps, themeProps, bannerProps, jumbotronProps }) => {
  const [ hasBackdrop, toggleBackdrop ] = useState(false);

  return (
    <>
      <Header
        companyProps={companyProps}
        bannerProps={bannerProps}
        jumbotronProps={jumbotronProps}
        currentPath={location.pathname}
        toggleBackdrop={toggleBackdrop}
        hasBackdrop={hasBackdrop}
        allPages={allPages}
        themeProps={themeProps}
      />
      <StyledMainContent hasBackdrop={hasBackdrop}>
        {children}
      </StyledMainContent>
      <Footer
        companyProps={companyProps}
        allPages={allPages}
        footerFg={themeProps.footerFg}
        footerBg={themeProps.footerBg}
      />
    </>
  );
};

export default Layout;
