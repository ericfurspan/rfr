import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const variants = {
  open: {
    opacity: 1,
    background: 'red',
    transition: { duration: 4 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 4 },
  },
};

export const Toggle = ({ toggle, fasIcon }) => (
  <motion.button onClick={toggle} variants={variants}>
    <FontAwesomeIcon icon={['fas', fasIcon]} fixedWidth />
  </motion.button>
);
