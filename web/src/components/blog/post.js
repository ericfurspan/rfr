import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import BlockContent from '../block-content';
import Container from '../container';
import RoleList from '../role-list';

import styles from './post.module.css';

const BlogPost = ({ _rawBody, authors, title, coverPhoto, publishedAt }) => (
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
          {publishedAt && (
            <div className={styles.publishedAt}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')}
            </div>
          )}
          {authors && <RoleList title='Authored by' items={authors} listType='teamMember' />}
        </aside>
      </div>
    </Container>
  </article>
);

export default BlogPost;
