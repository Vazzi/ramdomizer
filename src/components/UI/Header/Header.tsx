import React from 'react';

import styles from './Header.module.scss';

/**
 * Header
 * Represent the header of the application on the first page
 *
 * @returns React component
 */
const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Randomizer</h1>
      <p>Here you can find and use functions to randomize anything.</p>
    </div>
  );
};

export default Header;
