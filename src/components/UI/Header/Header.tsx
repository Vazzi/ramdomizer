import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Randomizer</h1>
      <p>Here you can find randomize functions.</p>
    </div>
  );
};

export default Header;
