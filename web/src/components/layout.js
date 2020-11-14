import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './header';

import '../styles/layout.css';
import styles from './layout.module.css';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBanner, contactInfo }) => (
  <>
    <Header
      siteTitle={siteTitle}
      siteLogo={siteLogo}
      siteBanner={siteBanner}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <div>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
          {contactInfo && (
            <div className={styles.socialMediaLinks}>
              {contactInfo.socialMedia.map((platform) => (
                <a href={platform.url} key={platform.url} target='_blank' rel='noreferrer noopener' aria-label={`link to ${platform.platformName}`}>
                  <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
