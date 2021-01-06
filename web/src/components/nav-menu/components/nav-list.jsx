import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../../lib/string-utils';

const listItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const NavList = ({ pages, toggle }) => (
  <ul>
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
  </ul>
);
