import React from 'react';
import { format, distanceInWords, differenceInDays } from 'date-fns';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import Container from '../container';
import BlockContent from '../block-content';
import RoleList from '../role-list';

import styles from './post.module.css';

function EventPost (props) {
  const { _rawBody, title, organizers, coverPhoto, eventAt } = props;

  return (
    <article className={styles.root}>
      {coverPhoto && coverPhoto.asset && (
        <div className={styles.coverPhoto}>
          <img
            src={imageUrlFor(buildImageObj(coverPhoto))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={coverPhoto.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {eventAt && (
              <div className={styles.eventAt}>
                {differenceInDays(new Date(eventAt), new Date()) > 3
                  ? distanceInWords(new Date(eventAt), new Date())
                  : format(new Date(eventAt), 'MMMM Do YYYY')}
              </div>
            )}
            {organizers && <RoleList items={organizers} title='Organizers' />}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default EventPost;
