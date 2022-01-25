import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AppBar.module.scss';

/**
 * AppBar
 * Represent the App bar of the application
 *
 * @returns React component
 */
const AppBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h3>Randomizer</h3>
      </Link>
    </div>
  );
};

export default AppBar;
