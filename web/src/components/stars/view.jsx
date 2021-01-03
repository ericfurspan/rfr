import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';

const Stars = ({ amount }) => (
  <Box flex row jc='center'>
    {Array.from(Array(amount), (_x, index) => (
      <Box m='0 0.5em' key={index}>
        <FontAwesomeIcon icon={['fas', 'star']} color='gold' size='3x' />
      </Box>
    ))}
  </Box>
);

export default Stars;
