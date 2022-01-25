import React from 'react';

import styles from './Dice.module.scss';

interface DiceProps {
  value: 1 | 2 | 3 | 4 | 5 | 6;
  size?: number;
}

/**
 * Dice component
 * Represent the dice
 *
 * @param {object} props React properties
 * @param {1|2|3|4|5|6} props.value The side of the dice. It's value
 * @returns React component
 */
const Dice: React.FC<DiceProps> = ({ value, size }) => {
  const styleSize = size ? { width: size, height: size } : {};

  const dots = Array(value)
    .fill(0)
    .map((_, i) => <span key={i} className={styles.dot} />);

  return (
    <div className={styles.face} style={styleSize}>
      {dots}
    </div>
  );
};

export default Dice;
