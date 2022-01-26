import React from 'react';
import { useIntl } from 'react-intl';

import styles from './RollButton.module.scss';
import messages from './messages';

interface RollButtonProps {
  onClick: () => void;
  disabled: boolean;
}

/**
 * Roll button
 * Represent the button that user clicks on every page to roll the random result
 *
 * @returns React component
 */
const RollButton: React.FC<RollButtonProps> = ({
  onClick,
  disabled = false
}) => {
  const { formatMessage } = useIntl();

  return (
    <button
      className={styles.button}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {formatMessage({ ...messages.title })}
    </button>
  );
};

export default RollButton;
