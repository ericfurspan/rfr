import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import BlockContent from './block-content';
import Container from './container';

import styles from './team-member.module.css';

function TeamMember (props) {
  const { person, _rawPerson, certifications } = props;

  return (
    <article className={styles.root}>
      {person.image && person.image.asset && (
        <div className={styles.image}>
          <img
            src={imageUrlFor(buildImageObj(person.image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={person.image.alt}
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
          <aside className={styles.metaContent}>
            {certifications.length > 0 && (
              <div className={styles.certifications}>
                <h3 className={styles.certificationsHeadline}>Certifications</h3>
                <ul>
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default TeamMember;
