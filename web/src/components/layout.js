import React from 'react';
import Header from './header';
import ThemeToggle from './theme-toggle';

import '../styles/layout.css';
import styles from './layout.module.css';

const Layout = ({ children, siteTitle, siteSubtitle, siteLogo, siteBanner, contact }) => (
  <>
    <Header
      siteTitle={siteTitle}
      siteSubtitle={siteSubtitle}
      siteLogo={siteLogo}
      siteBanner={siteBanner}
      contact={contact}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  </>
);

export default Layout;
