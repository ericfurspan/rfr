import { Link } from 'gatsby';
import React from 'react';
import { buildImageObj, cn, getTeamMemberUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import styles from './team-member-preview.module.css';
import { responsiveTitle4, small } from '../typography.module.css';

function TeamMemberPreview (props) {
  const { slug, person } = props;

  return (
    <>
      <Link className={styles.root} to={getTeamMemberUrl(slug.current)}>
        <div className={styles.leadMediaThumb}>
          {person.image && person.image.asset && (
            <img
              src={imageUrlFor(buildImageObj(person.image))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
              alt={person.image.alt}
            />
          )}
        </div>
        <h3 className={cn(responsiveTitle4, styles.name)}>{person.name}</h3>
      </Link>
      {props.certifications && (
        <span className={cn(small, styles.certifications)}>
          {props.certifications.join(', ')}
        </span>
      )}
    </>
  );
}

export default TeamMemberPreview;
