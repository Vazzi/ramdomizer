import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

/**
 * Header
 * Represent the header of the application
 *
 * @returns React component
 */
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link to="/" className={styles.title}>
          Randomizer
        </Link>
      </h1>
      <p>Here you can find and use functions to randomize anything.</p>
    </div>
  );
};

export default Header;
