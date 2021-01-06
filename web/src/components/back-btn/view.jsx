import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledButton } from './style';

const BackBtn = ({ linkTo, linkText = 'Back' }) => {
  return (
    <StyledButton>
      <Link to={linkTo || '/'}>
        <FontAwesomeIcon icon={['fas', 'caret-left']} size='lg' color='inherit' />
        <span>{linkText}</span>
      </Link>
    </StyledButton>
  );
};

export default BackBtn;
