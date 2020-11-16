import { Link } from 'gatsby';
import React from 'react';
import { buildImageObj, getTeamMemberUrl } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { capitalize } from '../lib/string-utils';

import styles from './role-list.module.css';

const RoleList = ({ title, items, listType }) => (
  <div className={styles.root}>
    <h2 className={styles.headline}>{title}</h2>
    <ul className={styles.list}>
      {items.map((item) => (
        <ListItem item={item} type={listType} key={item._id} />
      ))}
    </ul>
  </div>
);

export default RoleList;

const ListItem = ({ item, type }) => {
  let url;
  if (type === 'teamMember') {
    url = getTeamMemberUrl(item.slug);
  }

  return (
    <Link to={url}>
      <li className={styles.listItem}>
        <div className={styles.avatar}>
          {item.person && item.person.image && item.person.image.asset && (
            <img
              src={imageUrlFor(buildImageObj(item.person.image))
                .width(100)
                .height(100)
                .fit('crop')
                .url()}
              alt={`Avatar for ${item.person.name}`}
            />
          )}
        </div>
        <div>
          <div>
            <strong>{(item.person && item.person.name) || <em>Missing</em>}</strong>
          </div>
          {item.roles && (
            <div>
              {item.roles.map((role, idx) => {
                switch (true) {
                  case idx === 0:
                    return <span key={role}>{capitalize(role)}</span>;
                  case idx === item.roles.length - 1:
                    return <span key={role}> & {role}</span>;
                  default:
                    return <span key={role}>, {role}</span>;
                }
              })}
            </div>
          )}
        </div>
      </li>
    </Link>
  );
};
