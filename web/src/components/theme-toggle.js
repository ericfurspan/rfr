import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [activeTheme, toggleActiveTheme] = useState('light');

  const handleThemeToggle = () => {
    const isDark = document.body.classList.contains('dark');

    if (isDark) {
      document.body.classList.remove('dark');
      toggleActiveTheme('light');
    } else {
      document.body.classList.add('dark');
      toggleActiveTheme('dark');
    }
  };

  return (
    <button onClick={handleThemeToggle} className={styles.btn}>
      <span>{`Use ${activeTheme === 'dark' ? 'Light' : 'Dark'} theme`}</span>
      <FontAwesomeIcon icon='moon' />
    </button>
  );
};

export default ThemeToggle;
