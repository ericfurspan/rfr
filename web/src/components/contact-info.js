import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './contact-info.module.css';
import { headline } from './typography.module.css';

const ContactInfo = ({ title, email, socialMedia }) => {
  return (
    <>
      {title && <h2 className={headline}>{title}</h2>}
      <div className={styles.contact}>
        <div>
          <FontAwesomeIcon icon='envelope' />
          <span>Email:</span>
        </div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <br />
      {socialMedia.map((platform) => (
        <div className={styles.contact} key={platform.url}>
          <div>
            <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
            <span>{`${platform.platformName}:`}</span>
          </div>
          <a href={platform.url} target='_blank' rel='noreferrer noopener' aria-label={`link to ${platform.platformName}`}>
            {`View ${platform.platformName}`}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
