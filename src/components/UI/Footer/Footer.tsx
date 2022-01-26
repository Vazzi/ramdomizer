import React from 'react';
import { useIntl } from 'react-intl';

import styles from './Footer.module.scss';
import messages from './messages';

/**
 * Footer
 * Represent the footer of the application with some informations
 *
 * @returns React component
 */
const Footer: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.main}>
      <p>
        {`${formatMessage({ ...messages.createdBy })} `}
        <a target="_blank" rel="noreferrer" href="http://vlasakjakub.cz">
          vlasakjakub.cz
        </a>{' '}
        © 2021
      </p>
      <p>
        {`${formatMessage({ ...messages.sourceCode })} `}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Vazzi/ramdomizer"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Footer;
