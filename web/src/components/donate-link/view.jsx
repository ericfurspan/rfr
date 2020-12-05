import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledLinkWrapper } from './style';

const DonateLink = ({ linkText, url, icon }) => (
  <StyledLinkWrapper>
    <a href={url} target='_blank' rel='noreferrer noopener'>
      {icon ? (
        <FontAwesomeIcon icon={[icon.faPackage, icon.faIconName]} />
      ) : (
        <FontAwesomeIcon icon={['fas', 'donate']} />
      )}
      <div>{linkText}</div>
    </a>
  </StyledLinkWrapper>
);

export default DonateLink;
