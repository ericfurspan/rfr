import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './logo';
import { cn } from '../lib/helpers';
import { capitalize } from '../lib/string-utils';

import styles from './header.module.css';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBanner, allPageIds = [] }) => (
  <div className={styles.root}>
    {siteBanner && <div className={styles.banner}>{siteBanner}</div>}
    <div className={styles.wrapper}>
      {(siteLogo && siteLogo.asset) && <Logo image={siteLogo} />}
      <h1 className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <FontAwesomeIcon icon='bars' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          {allPageIds.map((page, index) => (
            <li key={`${page}-${index}`}>
              <Link to={`/${page}`}>{capitalize(page)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
