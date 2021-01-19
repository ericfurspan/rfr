import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';

const Stars = ({ amount, align = 'initial' }) => (
  <Box flex row jc={align}>
    {Array.from(Array(amount), (_x, index) => (
      <Box mr='0.5em' key={index}>
        <FontAwesomeIcon icon={['fas', 'star']} color='gold' size='2x' />
      </Box>
    ))}
  </Box>
);

export default Stars;
