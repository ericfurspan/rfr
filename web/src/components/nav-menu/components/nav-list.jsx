import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../../lib/string-utils';
import { faIconForPage } from '../../../lib/helpers';

export const NavList = ({ pages, toggle }) => (
  <ul>
    {['home', ...pages].map((page, index) => (
      <motion.li
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        key={`${page}-${index}`}
      >
        <Link
          to={page === 'home' ? '/' : `/${page}/`}
          onClick={toggle}
        >
          <FontAwesomeIcon icon={faIconForPage(page)} fixedWidth />
          <span>{capitalize(page.replace('-', ' '))}</span>
        </Link>
      </motion.li>
    ))}
  </ul>
);
