import React from 'react';
import { Link } from 'gatsby';

import { buildImageObj, getTeamMemberUrl } from '../../../../lib/helpers';
import { imageUrlFor } from '../../../../lib/image-url';
import { capitalize } from '../../../../lib/string-utils';
import { StyledListItem, StyledAvatar } from './style';

const urlForType = (slug, type) => {
  if (type === 'teamMember') {
    return getTeamMemberUrl(slug);
  }
};

const ListItem = ({ item, type }) => {
  return (
    <Link to={urlForType(item.slug, type)}>
      <StyledListItem>
        <StyledAvatar>
          {item.person && item.person.image && item.person.image.asset && (
            <img
              src={imageUrlFor(buildImageObj(item.person.image))
                .width(100)
                .height(100)
                .fit('crop')
                .format('webp')
                .url()}
              alt={`Avatar for ${item.person.name}`}
            />
          )}
        </StyledAvatar>
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
      </StyledListItem>
    </Link>
  );
};

export default ListItem;
