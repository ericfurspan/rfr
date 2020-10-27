import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './logo';

import { micro } from './typography.module.css';
import styles from './header.module.css';

const Header = ({ siteTitle, siteSubtitle, siteLogo, siteBanner, contact }) => (
  <div className={styles.root}>
    {siteBanner && <div className={styles.banner}>{siteBanner}</div>}
    <div className={styles.wrapper}>
      {(siteLogo && siteLogo.asset) && <Logo image={siteLogo} />}
      <div className={styles.branding}>
        <Link to='/'><h1 className={styles.title}>{siteTitle}</h1></Link>

        {siteSubtitle && <p>{siteSubtitle}</p>}
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            {contact && contact.email && (
              <a href={`mailto:${contact.email}`} aria-label='send email'>
                <FontAwesomeIcon icon='envelope' />
                <span className={micro}>Email</span>
              </a>
            )}
          </li>
          {contact && contact.socialMedia.map((platform) => (
            <li key={platform.url}>
              <a href={platform.url} target='_blank' rel='noreferrer noopener' aria-label={`link to ${platform.platformName}`}>
                <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
                <span className={micro}>{platform.platformName}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
