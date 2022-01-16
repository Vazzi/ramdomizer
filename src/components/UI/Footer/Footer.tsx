import React from 'react';
import styles from './Footer.module.scss';

/**
 * Footer
 * Represent the footer of the application with some informations
 *
 * @returns React component
 */
const Footer: React.FC = () => {
  return (
    <p className={styles.main}>
      Created by{' '}
      <a target="_blank" rel="noreferrer" href="http://vlasakjakub.cz">
        vlasakjakub.cz
      </a>{' '}
      © 2021
    </p>
  );
};

export default Footer;
