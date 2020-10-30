import React from 'react';
import { Link } from 'gatsby';
import TeamMemberPreview from './team-member-preview';

import styles from './team-member-preview-grid.module.css';

function TeamMemberPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && (
        <h2 className={styles.headline}>{props.title}</h2>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <TeamMemberPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>See the full team</Link>
        </div>
      )}
    </div>
  );
}

export default TeamMemberPreviewGrid;
