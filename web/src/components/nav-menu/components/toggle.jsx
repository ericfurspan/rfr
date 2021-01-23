import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toggle = ({ toggle, fasIcon }) => (
  <button onClick={toggle} className='nav-toggle' aria-label='Menu toggle'>
    <FontAwesomeIcon icon={['fas', fasIcon]} fixedWidth />
  </button>
);
