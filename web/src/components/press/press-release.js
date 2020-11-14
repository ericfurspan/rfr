import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../container';
import BlockText from '../block-text';

import styles from './press-release.module.css';

function PressRelease (props) {
  const { title, source, url, _rawExcerpt, publishedAt } = props;

  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.publishedAt}>
            {differenceInDays(new Date(publishedAt), new Date()) > 3
              ? distanceInWords(new Date(publishedAt), new Date())
              : format(new Date(publishedAt), 'MMMM Do YYYY')}
          </div>
        </div>
        <div className={styles.mainContent}>
          <BlockText blocks={_rawExcerpt} />
          <div>
            <p className={styles.sourceName}>{source}</p>
            <a href={url} target='_blank' rel='noreferrer noopener' className={styles.storyLink}>
              <span>Read the full story</span>
              <FontAwesomeIcon icon='arrow-alt-circle-right' />
            </a>
          </div>
        </div>
      </Container>
    </article>
  );
}

export default PressRelease;
