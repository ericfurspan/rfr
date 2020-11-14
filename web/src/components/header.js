import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './logo';
import { cn } from '../lib/helpers';

import styles from './header.module.css';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBanner }) => (
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
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/team'>Team</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
