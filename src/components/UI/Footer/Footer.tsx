import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <p className={styles.main}>
      <a target="_blank" rel="noreferrer" href="http://vlasakjakub.cz">
        vlasakjakub.cz
      </a>{' '}
      © 2021
    </p>
  );
};

export default Footer;
