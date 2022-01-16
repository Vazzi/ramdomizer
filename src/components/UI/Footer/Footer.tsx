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
    <div className={styles.main}>
      <p>
        Created by{' '}
        <a target="_blank" rel="noreferrer" href="http://vlasakjakub.cz">
          vlasakjakub.cz
        </a>{' '}
        © 2021
      </p>
      <p>
        Source code on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Vazzi/ramdomizer"
        >
          github.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
