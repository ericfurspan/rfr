import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import BlockContent from '../block-content';
import Container from '../container';

import styles from './team-member.module.css';

const TeamMember = ({ person, _rawPerson, certifications }) => {
  const { image, contact } = person;

  return (
    <article className={styles.root}>
      {image && image.asset && (
        <div className={styles.image}>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={image.alt}
          />
        </div>
      )}
      <Container>
        <Link to='/' className={styles.goBack}>
          <FontAwesomeIcon icon='arrow-left' />
          <span>Back</span>
        </Link>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{person.name}</h1>
            {_rawPerson.bio && <BlockContent blocks={_rawPerson.bio} />}
          </div>

          <aside>
            {certifications.length > 0 && (
              <div className={styles.listGroup}>
                <h3 className={styles.listGroupHeadline}>
                  Certifications
                </h3>
                <ul>
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
            {contact && contact.socialMedia.length > 0 && (
              <div className={styles.listGroup}>
                <h3 className={styles.listGroupHeadline}>
                  Social Media
                </h3>
                <ul className={styles.list}>
                  {contact.socialMedia.map((platform) => (
                    <li className={styles.listItem} key={platform.linkText}>
                      {platform.icon && (
                        <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
                      )}
                      <a href={platform.url} target='_blank' rel='noreferrer noopener'>
                        {platform.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
};

export default TeamMember;
