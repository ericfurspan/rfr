import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { capitalize } from '../../../lib/string-utils';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ page, toggle }) => {
  return (
    <Link to={page === 'home' ? '/' : `/${page}`} onClick={toggle}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{capitalize(page)}</span>
      </motion.li>
    </Link>
  );
};
