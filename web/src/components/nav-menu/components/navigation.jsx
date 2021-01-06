import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../../lib/string-utils';

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const listItemVariants = {
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

export const Navigation = ({ pages, toggle }) => (
  <motion.ul variants={listVariants}>
    {['home', ...pages].map((page, index) => (
      <Link
        to={page === 'home' ? '/' : `/${page}/`}
        onClick={toggle}
        key={`${page}-${index}`}
      >
        <motion.li
          variants={listItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {capitalize(page)}
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </motion.li>
      </Link>
    ))}
  </motion.ul>
);
