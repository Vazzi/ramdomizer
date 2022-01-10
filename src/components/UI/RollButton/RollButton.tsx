import React from 'react';

import styles from './RollButton.module.scss';

interface RollButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const RollButton: React.FC<RollButtonProps> = ({
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={styles.button}
      onClick={() => onClick()}
      disabled={disabled}
    >
      Roll
    </button>
  );
};

export default RollButton;
