import React from 'react';

import styles from './RollButton.module.scss';

interface RollButtonProps {
  onClick: () => void;
}

const RollButton: React.FC<RollButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      Roll
    </button>
  );
};

export default RollButton;
