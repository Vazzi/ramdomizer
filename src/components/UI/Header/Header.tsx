import React from 'react';
import { useIntl } from 'react-intl';

import styles from './Header.module.scss';
import messages from './messages';

/**
 * Header
 * Represent the header of the application on the first page
 *
 * @returns React component
 */
const Header: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <h1>Randomizer</h1>
      <p>{formatMessage({ ...messages.description })}</p>
    </div>
  );
};

export default Header;
